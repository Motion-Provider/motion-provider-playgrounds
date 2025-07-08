import { CircleLayout } from "@/components/playground/circle-layout";
import { ImageLayout } from "@/components/playground/image-layout";
import { Button } from "@/components/ui/button";
import { Box, ListRestart } from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <main className="w-full h-screen  items-center justify-center flex overflow-hidden relative dark">
      <CircleLayout />
      <ImageLayout />
      <div className="fixed bottom-8 min-w-96 max-w-min h-14 bg-transparent backdrop-blur-sm  justify-between flex items-center px-8 rounded-2xl z-50 *:hover:scale-110 *:cursor-pointer">
        <Button variant="ghost">
          <ListRestart className="size-7" />
        </Button>
        <Button variant="ghost">
          <Box className="size-7 " />
        </Button>
        <Button variant="ghost">
          <Box className="size-7 " />
        </Button>
        <Button variant="ghost">
          <Box className="size-7 " />
        </Button>
      </div>
    </main>
  );
}
