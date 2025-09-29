import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FC, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import { toast } from "sonner";
import clientService from "@/utils/supabase/clientService";
import { useCounter, useLocalStorage } from "@uidotdev/usehooks";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const RATE_LIMIT_IN_SECONDS: number = 10;
const RATE_LIMIT_ENDLINE: number = 0;

const Waitlist: FC<{
  isDescriptionOpen?: boolean;
  className?: string;
}> = ({ isDescriptionOpen = true, className }) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [count, { decrement, reset }] = useCounter(RATE_LIMIT_IN_SECONDS, {
    min: RATE_LIMIT_ENDLINE,
    max: RATE_LIMIT_IN_SECONDS,
  });
  const [attempt, saveAttempt] = useLocalStorage("attempt", 0);

  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      if (attempt <= 0) return;

      if (count > RATE_LIMIT_ENDLINE) {
        decrement();
      }
    }, 1000);

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [attempt]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      if (!emailRegex.test(email))
        throw new Error("Please enter a valid email address.|400");

      if (attempt > 0 && count !== RATE_LIMIT_ENDLINE)
        throw new Error(
          `Calm down champ — wait ${count} seconds before trying again.|429`
        );

      const { error } = await clientService()
        .from("users")
        .insert({ email: email.toLowerCase() })
        .single();

      if (error) {
        throw new Error(`${error.message}|${error.code}`);
      }

      setEmail("");
      saveAttempt(attempt + 1);
      reset();

      return toast.success(
        `You have been successfully added to the waitlist 🎉`,
        {
          position: "top-center",
          richColors: true,
        }
      );
    } catch (err) {
      const [msg, code] = (err as Error).message.trim().split("|");

      if (code === "23505") {
        return toast.warning("You are already in man, take it easy..", {
          position: "top-center",
          richColors: true,
        });
      }

      if (code === "400") {
        return toast.warning(msg, {
          position: "top-center",
          richColors: true,
        });
      }

      if (code === "429") {
        return toast.warning(msg, { position: "top-center", richColors: true });
      }

      return toast.warning("Operation failed due to internal server error.", {
        position: "top-center",
        richColors: true,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={cn("flex flex-row mt-2", className)}
      >
        <Input
          value={email}
          required
          disabled={loading}
          about="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder={
            isDescriptionOpen
              ? "Type your email and get instant updates..."
              : "Get instant updates..."
          }
          id="email"
          className="rounded-r-none border-r-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none"
        />
        <Button
          disabled={loading}
          variant="secondary"
          type="submit"
          className="rounded-l-none w-1/6  "
        >
          {loading ? (
            <Skeleton className="size-4" />
          ) : (
            <ArrowRight className="size-4" />
          )}
        </Button>
      </form>
      {isDescriptionOpen && (
        <p className="text-muted-foreground text-xs -mt-2">
          Docs, experiments and more. I promise — no bullshit.
        </p>
      )}
    </>
  );
};

export default Waitlist;
