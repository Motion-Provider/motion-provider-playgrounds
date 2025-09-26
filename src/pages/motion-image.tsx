import Head from "next/head";
import PlaygroundLayout from "@/layouts/playground-layout";
import { GroundLabel } from "@/components/playground/ground-label";
import MotionPlaygroundImage from "@/components/playground/grounds/motion-image";
import PlaygroundController from "@/components/playground/playground-controller";
import PlaygroundConfiguration from "@/components/playground/playground-configuration";

export default function MotionImagePage() {
  return (
    <PlaygroundLayout>
      <Head>
        <title>Playgrounds | Motion Image</title>
      </Head>
      <MotionPlaygroundImage />
      <PlaygroundController />
      <GroundLabel className="text-7xl">Motion Image</GroundLabel>
      <PlaygroundConfiguration />
    </PlaygroundLayout>
  );
}
