import { createClient, SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

export default function clientService(): SupabaseClient {
  if (!url || !key) {
    throw new Error("Missing env vars");
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}
