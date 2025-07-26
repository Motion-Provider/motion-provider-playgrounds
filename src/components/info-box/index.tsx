import InfoBoxLayout from "@/layouts/info-box-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { SyntaxViewer } from "./child/syntax-viewer";

export default function InfoBox() {
  return (
    <InfoBoxLayout className="h-72 w-88 border absolute top-4 right-4 backdrop-blur-md rounded-2xl">
      <Tabs defaultValue="account" className="size-full">
        <TabsList className="w-full bg-transparent border-b rounded-none">
          <TabsTrigger value="view">View</TabsTrigger>
          <TabsTrigger value="learn">Learn</TabsTrigger>
          <TabsTrigger value="hints">Hints</TabsTrigger>
        </TabsList>
        <TabsContent value="view">
          <SyntaxViewer />
        </TabsContent>
        <TabsContent value="learn">Change your password here.</TabsContent>
      </Tabs>
    </InfoBoxLayout>
  );
}
