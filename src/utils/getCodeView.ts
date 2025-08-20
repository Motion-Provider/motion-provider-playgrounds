import { GetCodeViewProps } from "@/interfaces/@types-utils";

export default function getCodeView({
  id,
  metadata,
  motion,
  comment,
  commentIncluded,
}: GetCodeViewProps): string {
  const { currentMotion } = metadata;
  const { animation, delayLogic } = motion;

  switch (currentMotion) {
    case "MotionChain":
      return `${commentIncluded && `/*${comment}*/`}

import MotionChain from "@/motion/motion-chain";
import { MotionAnimationProps } from "@/motion/types";

const items = Array.from({ length: 5 }, (_, i) => <div className="size-12 my-1 rounded-2xl bg-stone-700 text-white grid place-items-center">{i + 1}</div>);
const animations = items.map(() => ({
  mode: ${JSON.stringify(animation.mode)},
  transition: ${JSON.stringify(animation.transition)},
  duration: ${JSON.stringify(animation.duration)},
})) as MotionAnimationProps[]

export function ${currentMotion}_${id}() {
    return (
      <MotionChain 
        animations={animations}
        config={{
          duration: 0.15,
          delayLogic: ${JSON.stringify(delayLogic)},
        }}
        elementType="div"
      >
        {items}
      </MotionChain>
    )
}
`;
    case "MotionContainer":
      return `${commentIncluded && `/*${comment}*/`}
import MotionContainer from "@/motion/motion-container";

export function ${currentMotion}_${id}() {
  return (
    <MotionContainer
      elementType="div"
      animation={{
        mode: ${JSON.stringify(animation.mode)},
        transition: ${JSON.stringify(animation.transition)},
        duration: ${JSON.stringify(animation.duration)},
      }}
      className="size-24 rounded-lg bg-lime-400"
    />
  );
}  
`;
    case "MotionText":
      return `${commentIncluded && `/*${comment}*/`}
import MotionText from "@/motion/motion-text";

export function ${currentMotion}_${id}() {
  return (
    <MotionText
      elementType="p"
      animation={{
        mode: ${JSON.stringify(animation.mode)},
        transition: ${JSON.stringify(animation.transition)},
        duration: ${JSON.stringify(animation.duration)},
      }}
      config={{
        duration: 0.12,
        mode: "chars",
        delayLogic: ${JSON.stringify(delayLogic)},
      }}
    >
      Hello World!
    </MotionText>
  );
}
`;
    case "MotionImage":
      return `${commentIncluded && `/*${comment}*/`}
import MotionImage from "@/motion/motion-image";

export function ${currentMotion}_${id}() {
  return (
    <MotionImage
      animation={{
        mode: ${JSON.stringify(animation.mode)},
        transition: ${JSON.stringify(animation.transition)},
        duration: ${JSON.stringify(animation.duration)},
      }}
      config={{
        duration: 0.88,
        // example image from unsplash
        img: "https://images.unsplash.com/photo-1486848538113-ce1a4923fbc5?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        delayLogic: ${JSON.stringify(delayLogic)},
        pieces: 64,
      }}
      wrapperClassName="size-[500px] rounded-lg overflow-hidden"
      fallback={<div className="size-96 animate-pulse bg-stone-800 rounded-lg" />}
    />
  );
}
`;
    case "MotionLink":
      return `/*
Here the things are different since we 
are not creating a new motion animation 
component but rather creating a brand new 
redirector to trigger 'reverse' effect for 
the motioned components by controlling them. 
Notice that this component only works on 
Next.js environments since we are using 
'useRouter' from 'next/router'.
*/
import MotionLink from "@/motion/motion-link";
import MotionContainer from "@/motion/motion-container";

export function ${currentMotion}_${id}() {
  // These are something new I know :)
  // I'll talk about these hooks later on.
  // So please subscribe to emails to get 
  // instant updates.
  const { control, onReverse } = useAnimationControl();
  const controller = useAnimation(control);

  return (
    <>
      {
      // Assuming we have   
      // '<MotionContainer />' in our 
      // current page.
      }
      <MotionContainer 
        elementType="div"
        animation={{
          mode: ${JSON.stringify(animation.mode)},
          transition: ${JSON.stringify(animation.transition)},
          duration: ${JSON.stringify(animation.duration)},
        }}
        // passing the controller to our 
        // target components in order to
        // create transition out effect.
        controller={controller} 
        className="size-24 rounded-lg bg-lime-400"
      />
      <MotionLink
        onReverse={onReverse}
        href="/go-to-next-page" // Page to navigate
        timer={3000} // Duration navigation
      >
        Go to next page 
      </MotionLink>
    </>
  );
}`;
    case "MotionMovie":
      return `${commentIncluded && `/*${comment}*/`}
import MotionMovie from "@/motion/motion-movie";

export function ${currentMotion}_${id}() {
  const images = [
    "https://images.unsplash.com/photo-1755097441290-408c244d0c8f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1755105194454-21564954e25e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <MotionMovie
      animations={{
        enter: ["filterBlurIn", "fadeIn"],
        exit: ["fadeOut"],
        transition: "smooth",
        duration: 1,
      }}
      config={{
        pieces: 64,
        images: images,
        animationDuration: 5,
        delayLogic: "sinusoidal",
      }}
      wrapperClassName="size-[500px] z-50 rounded-lg absolute"
      className="size-full"
      fallback={<div className="size-96 animate-pulse bg-stone-800 rounded-lg" />}
    />
  );
}`;
    default:
      return "";
  }
}
