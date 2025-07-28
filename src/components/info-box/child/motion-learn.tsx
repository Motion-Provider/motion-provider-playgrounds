import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import InfoBoxScrollLayout from "@/layouts/infobox-scroll-layout";

const MotionLearn = () => {
  return (
    <InfoBoxScrollLayout className="flex flex-col">
      <LearnCard />
      <LearnCard />
      <LearnCard />
      <LearnCard />
      <LearnCard />
    </InfoBoxScrollLayout>
  );
};

const LearnCard = () => (
  <Card className="mb-2 border-none rounded-md mx-2">
    <CardHeader>
      <CardTitle className="text-sm">Motion Chain</CardTitle>
      <CardDescription className="text-xs">
        Quis exercitation elit reprehenderit mollit excepteur est qui sit est
        cillum.
      </CardDescription>
    </CardHeader>
  </Card>
);

export default MotionLearn;
