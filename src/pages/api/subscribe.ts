import { createServiceClient } from "@/utils/supabase/serviceClient";
import type { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";

type Result = { ok: boolean; message?: string };

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_IP = 10;
const MAX_PER_EMAIL = 3;
const ipMap = new Map<string, { count: number; resetAt: number }>();
const emailMap = new Map<string, { count: number; resetAt: number }>();

function bump(
  map: Map<string, { count: number; resetAt: number }>,
  key: string,
  max: number
) {
  const now = Date.now();
  const entry = map.get(key);
  if (!entry || now > entry.resetAt) {
    map.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= max) return false;
  entry.count += 1;
  return true;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  if (req.method !== "POST")
    return res.status(405).json({ ok: false, message: "Method not allowed" });

  const ip =
    (req.headers["x-forwarded-for"] as string) ||
    req.socket.remoteAddress ||
    "unknown";
  const { email } = req.body ?? {};

  if (!email || typeof email !== "string" || !validator.isEmail(email)) {
    return res.status(400).json({ ok: false, message: "Invalid request" });
  }

  if (!bump(ipMap, ip, MAX_PER_IP)) {
    return res.status(429).json({ ok: false, message: "Too many requests" });
  }

  const normalized = validator.normalizeEmail(email) || email.toLowerCase();
  if (!normalized) {
    return res.status(400).json({ ok: false, message: "Invalid email" });
  }
  if (!bump(emailMap, normalized, MAX_PER_EMAIL)) {
    return res
      .status(200)
      .json({ ok: true, message: "If accepted, your request is queued" });
  }

  const supabase = createServiceClient();

  try {
    const { error } = await supabase
      .from("users")
      .insert([{ email: normalized }]);

    if (error) {
      console.error("Supabase insert error (masked):", error.message || error);
      return res.status(200).json({
        ok: true,
        message: "If accepted, your request has been queued",
      });
    }

    return res.status(200).json({
      ok: true,
      message:
        "You're in the checklist! You will get instant updates from Motion Provider.",
    });
  } catch (err) {
    console.error("Server error (masked):", (err as Error).message || err);
    return res.status(500).json({ ok: false, message: "Server error" });
  }
}
