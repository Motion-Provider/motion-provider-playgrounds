import { GroundLabel } from "@/components/playground/ground-label";
import Container from "@/components/playground/grounds/motion-container";
import PlaygroundConfiguration from "@/components/playground/playground-configuration";
import PlaygroundController from "@/components/playground/playground-controller";
import PlaygroundLayout from "@/layouts/playground-layout";
import Head from "next/head";

export default function MotionContainerPage() {
  return (
    <PlaygroundLayout>
      <Head>
        <title>Playgrounds | Motion Container</title>
      </Head>
      <Container />
      <PlaygroundController />
      <GroundLabel className="text-7xl">Motion Container</GroundLabel>
      <PlaygroundConfiguration />
    </PlaygroundLayout>
  );
}
