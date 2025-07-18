import { interFont } from "@/lib/fonts";

export default function Home() {
  return (
    <main
      className={`w-full h-screen items-center justify-center flex  relative dark ${interFont.className}`}
    >
      <section className="max-w-7xl h-full">
        <CarouselDemo />
      </section>
    </main>
  );
}

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

function CarouselDemo() {
  return (
    <Carousel className="size-full items-center flex">
      <CarouselContent className="size-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="size-full px-8     ">
            <Feature />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const Feature = () => (
  <div className="size-full grid place-items-center-safe ">
    <div className="container mx-auto items-center">
      <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
        <div className="flex gap-4 flex-col flex-1">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-6xl tracking-tighter lg:max-w-xl font-regular text-left">
              This is the start of something new
            </h2>
            <p className="text-md tracking-tighter max-w-xl lg:max-w-sm leading-relaxed text-muted-foreground text-left">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
        </div>
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1"></div>
      </div>
    </div>
  </div>
);
