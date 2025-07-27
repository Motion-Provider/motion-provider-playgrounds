import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import routes from "./routes";
import MotionContainer from "@/motion/motion-container";
import InfoBoxPortal from "./portal";

export default function InfoBox() {
  const defaultValue = Object.keys(routes)[0];

  return (
    <InfoBoxPortal className="h-72 w-88 border absolute top-4 right-4 backdrop-blur-md rounded-2xl">
      <Tabs defaultValue={defaultValue} className="size-full relative">
        <TabsList className="w-full bg-transparent border-b rounded-none h-8">
          {Object.keys(routes).map((route) => (
            <TabsTrigger key={route} value={route} className="capitalize">
              {route}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(routes).map(([key, Component]) => (
          <TabsContent key={key} value={key} className="relative">
            <MotionContainer
              animation={{
                mode: ["filterBlurIn", "fadeIn"],
                transition: "smooth",
                duration: 0.88,
              }}
              elementType={"div"}
              key={key}
              className="size-full"
            >
              <Component />
            </MotionContainer>
          </TabsContent>
        ))}
      </Tabs>
    </InfoBoxPortal>
  );
}
