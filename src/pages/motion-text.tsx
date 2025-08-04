import Text from "@/components/playground/grounds/motion-text";
import { ReduxLibMotionTextInitialState } from "@/constants/redux/redux-motion-defaults.lib";
import { ReduxLibMotionProps } from "@/interfaces/@types-lib";
import PlaygroundLayout from "@/layouts/playground-layout";
import Head from "next/head";
import { useState } from "react";

export default function MotionTextPage() {
  const [animation, setAnimation] = useState<ReduxLibMotionProps>(
    ReduxLibMotionTextInitialState
  );
  return (
    <PlaygroundLayout>
      <Head>
        <title>Playgrounds | Motion Text</title>
      </Head>
      {JSON.stringify(animation)}
      <Text animation={animation.animation} />
    </PlaygroundLayout>
  );
}
