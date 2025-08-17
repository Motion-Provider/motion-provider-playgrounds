import { GroundLabel } from "@/components/playground/ground-label";
import Image from "@/components/playground/grounds/motion-image";
import PlaygroundConfiguration from "@/components/playground/playground-configuration";
import PlaygroundController from "@/components/playground/playground-controller";
import PlaygroundLayout from "@/layouts/playground-layout";
import Head from "next/head";

export default function MotionImagePage() {
  return (
    <PlaygroundLayout>
      <Head>
        <title>Playgrounds | Motion Image</title>
      </Head>
      <Image />
      <PlaygroundController />
      <GroundLabel className="text-8xl">Motion Image</GroundLabel>
      <PlaygroundConfiguration />
    </PlaygroundLayout>
  );
}
