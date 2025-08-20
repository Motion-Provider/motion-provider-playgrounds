import React from "react";
import dynamic from "next/dynamic";
import InfoBoxPortal from "./portal";
import { InfoboxRouteItem } from "@/interfaces/@types-components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Waitlist } from "../home/waitlist";
import { Button } from "../ui/button";
import Link from "next/link";
import { Coffee } from "lucide-react";

const routes = ["hints", "syntax", "installation"] as const;

const components = routes.map((item) => ({
  name: item,
  Component: dynamic(() => import(`./tabs/${item}`)),
})) as InfoboxRouteItem[];

export default function InfoBox() {
  return (
    <InfoBoxPortal className="h-84 w-88 border absolute top-4 right-4 backdrop-blur-md rounded-2xl z-[49] flex flex-col">
      <div className="w-full h-14 items-center justify-between flex flex-row gap-2 -mt-2 px-1">
        <Waitlist isDescriptionOpen={false} className="w-5/6" />
        <Button size="sm" asChild>
          <Link
            href="https://buymeacoffee.com/bilenburakf"
            target="_blank"
            className="flex flex-row gap-2 mt-2 "
          >
            <Coffee className="size-5" />
            <span className="font-extrabold">?</span>
          </Link>
        </Button>
      </div>
      <Tabs defaultValue={components[0].name} className="w-full h-72 relative">
        <TabsList className="w-full bg-transparent border-b rounded-none h-8">
          {components.map((route) => (
            <TabsTrigger
              key={route.name}
              value={route.name}
              className="capitalize"
            >
              {route.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {components.map(({ name, Component }) => (
          <TabsContent key={name} value={name} className="relative w-full">
            <Component />
          </TabsContent>
        ))}
      </Tabs>
    </InfoBoxPortal>
  );
}
