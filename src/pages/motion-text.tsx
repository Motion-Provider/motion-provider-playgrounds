import Text from "@/components/playground/grounds/motion-text";
import { MotionTextInitialState } from "@/constants/redux/redux-motion-defaults.lib";
import { MotionAnimation } from "@/interfaces/@types-constants";
import PlaygroundLayout from "@/layouts/playground-layout";
import Head from "next/head";
import { useState } from "react";

export default function MotionTextPage() {
  const [animation, setAnimation] = useState<MotionAnimation>(
    MotionTextInitialState
  );

  return (
    <PlaygroundLayout>
      <Head>
        <title>Playgrounds | Motion Text</title>
      </Head>
      {JSON.stringify(animation)}
      {/* <Text animation={animation.animation} /> */}
    </PlaygroundLayout>
  );
}
