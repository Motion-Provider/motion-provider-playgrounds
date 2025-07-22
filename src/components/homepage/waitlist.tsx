import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Waitlist = () => (
  <div className="flex flex-row mt-2">
    <Input
      about="email"
      type="email"
      placeholder="Type your email and join early access..."
      id="email"
      className="rounded-r-none border-r-0 "
    />
    <Button
      variant={"secondary"}
      className=" rounded-l-none w-1/6  border border-l-0"
    >
      <ArrowRight className="size-5" />
    </Button>
  </div>
);
