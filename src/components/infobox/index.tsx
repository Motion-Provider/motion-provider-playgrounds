import React from "react";
import dynamic from "next/dynamic";
import InfoBoxPortal from "./portal";
import { InfoboxRouteItem } from "@/interfaces/@types-components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const routes = ["hints", "syntax"];

const components = routes.map((item) => ({
  name: item,
  Component: dynamic(() => import(`./tabs/${item}`)),
})) as InfoboxRouteItem[];

export default function InfoBox() {
  return (
    <InfoBoxPortal className="h-72 w-88 border absolute top-4 right-4 backdrop-blur-md rounded-2xl">
      <Tabs defaultValue={components[0].name} className="size-full relative">
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
          <TabsContent key={name} value={name} className="relative">
            <Component />
          </TabsContent>
        ))}
      </Tabs>
    </InfoBoxPortal>
  );
}
