import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Waitlist = () => (
  <>
    <div className="flex flex-row mt-2">
      <Input
        about="email"
        type="email"
        placeholder="Type your email and join early access..."
        id="email"
        className="rounded-r-none border-r-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none"
      />
      <Button variant="secondary" className="rounded-l-none w-1/6  ">
        <ArrowRight className="size-5" />
      </Button>
    </div>
    <p className="text-muted-foreground text-xs -mt-2">
      Get instant updates on Motion Provider. I promise — no bullshit.
    </p>
  </>
);
