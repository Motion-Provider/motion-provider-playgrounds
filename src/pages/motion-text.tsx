import Head from "next/head";
import PlaygroundLayout from "@/layouts/playground-layout";
import Text from "@/components/playground/grounds/motion-text";
import { GroundLabel } from "@/components/playground/ground-label";
import PlaygroundConfiguration from "@/components/playground/playground-configuration";
import PlaygroundController from "@/components/playground/playground-controller";

export default function MotionTextPage() {
  return (
    <PlaygroundLayout>
      <Head>
        <title>Playgrounds | Motion Text</title>
      </Head>
      <Text />
      <PlaygroundController />
      <GroundLabel className="text-8xl">Motion Text</GroundLabel>
      <PlaygroundConfiguration />
    </PlaygroundLayout>
  );
}
