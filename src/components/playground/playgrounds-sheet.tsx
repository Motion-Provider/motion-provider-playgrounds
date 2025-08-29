import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Boxes } from "lucide-react";
import motionCardsLib from "@/constants/motion-cards.lib";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { interFont } from "@/lib/fonts";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const PlaygroundsSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="cursor-pointer ">
          <Boxes className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className={interFont.className}>
        <SheetHeader>
          <SheetTitle>Change Motion Playground</SheetTitle>
          <SheetDescription>
            Select a ground to continue. All unique, human-crafted AI-FREE
            staffs.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="w-full h-3/4">
          {motionCardsLib.map((item) => (
            <Link href={item.title.toLowerCase().replace(" ", "-")}>
              <Card
                key={item.id}
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
                className="bg-cover bg-top cursor-pointer hover:bg-center transition-all duration-500 h-auto rounded-none border-none group relative"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black opacity-50 backdrop-blur-xs z-0" />
                <CardHeader className="underline-offset-4 py-4 z-20 decoration-0">
                  <CardTitle className="group-hover:underline ">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="tracking-tighter group-hover:underline decoration-muted-foreground">
                    {item.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
          <ScrollBar orientation="vertical" />
        </ScrollArea>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default PlaygroundsSheet;
