import { GroundLabel } from "@/components/playground/ground-label";
import Movie from "@/components/playground/grounds/motion-movie";
import PlaygroundConfiguration from "@/components/playground/playground-configuration";
import PlaygroundController from "@/components/playground/playground-controller";
import PlaygroundLayout from "@/layouts/playground-layout";
import Head from "next/head";

export default function MotionMoviePage() {
  return (
    <PlaygroundLayout>
      <Head>
        <title>Playgrounds | Motion Movie</title>
      </Head>
      <Movie />
      <PlaygroundController />
      <GroundLabel className="text-7xl">Motion Movie</GroundLabel>
      <PlaygroundConfiguration />
    </PlaygroundLayout>
  );
}
