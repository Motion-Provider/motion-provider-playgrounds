import React from "react";
import Head from "next/head";
import PlaygroundLayout from "@/layouts/playground-layout";
import { GroundLabel } from "@/components/playground/ground-label";
import PlaygroundConfiguration from "@/components/playground/playground-configuration";
import MotionLink from "@/components/playground/grounds/motion-link";

export default function MotionLinkPage() {
  return (
    <PlaygroundLayout>
      <Head>
        <title>Playgrounds | Motion Link</title>
      </Head>
      <MotionLink />
      <GroundLabel className="text-8xl">Motion Link</GroundLabel>
      <PlaygroundConfiguration />
    </PlaygroundLayout>
  );
}
