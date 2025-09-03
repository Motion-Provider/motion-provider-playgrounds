import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FC, memo, useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import { toast } from "sonner";

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
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.ok && data.message.includes("checklist")) {
        toast.success(data.message, {
          duration: 5000,
          position: "top-center",
          richColors: true,
        });
        return;
      }

      if (data.ok) {
        toast.warning(data.message, {
          duration: 5000,
          position: "top-center",
          richColors: true,
        });
      }
    } catch (err) {
      toast.error("Unexpected error — please try again later.");
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
