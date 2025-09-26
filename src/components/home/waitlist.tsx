import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FC, memo, useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import { toast } from "sonner";
import clientService from "@/utils/supabase/clientService";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Waitlist: FC<{
  isDescriptionOpen?: boolean;
  className?: string;
}> = ({ isDescriptionOpen = true, className }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      if (!emailRegex.test(email))
        throw new Error("Please enter a valid email address.|400");

      const { error } = await clientService()
        .from("users")
        .insert({ email: email.toLowerCase() })
        .single();

      if (error) {
        throw new Error(`${error.message}|${error.code}`);
      }

      setEmail("");
      return toast.success(
        `You have been successfully added to the waitlist 🎉`,
        {
          position: "top-center",
          richColors: true,
        }
      );
    } catch (err) {
      const [msg, code] = (err as Error).message.split("|");

      if (code.includes("23505")) {
        return toast.warning("You are already in man, take it easy..", {
          position: "top-center",
          richColors: true,
        });
      }

      if (code.includes("400")) {
        return toast.warning(msg, {
          position: "top-center",
          richColors: true,
        });
      }

      return toast.warning(
        "Operation failed due to internal server error — contact to support for your hello@burakdev.com",
        {
          position: "top-center",
          richColors: true,
        }
      );
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
              ? "Type your email and join early access..."
              : "Join early access..."
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
          Get instant updates on Motion Provider. I promise — no bullshit.
        </p>
      )}
    </>
  );
};

export default memo(Waitlist);
