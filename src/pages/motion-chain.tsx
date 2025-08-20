import Head from "next/head";
import React from "react";
import PlaygroundLayout from "@/layouts/playground-layout";
import Chain from "@/components/playground/grounds/motion-chain";
import { GroundLabel } from "@/components/playground/ground-label";
import PlaygroundController from "@/components/playground/playground-controller";
import PlaygroundConfiguration from "@/components/playground/playground-configuration";

export default function MotionChainPage() {
  return (
    <PlaygroundLayout>
      <Head>
        <title>Playgrounds | Motion Chain</title>
      </Head>
      <Chain />
      <PlaygroundController />
      <GroundLabel className="text-8xl">Motion Chain</GroundLabel>
      <PlaygroundConfiguration />
    </PlaygroundLayout>
  );
}
