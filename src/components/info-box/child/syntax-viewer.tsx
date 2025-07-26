import { useRouter } from "next/router";
import data from "../data";

export const SyntaxViewer = () => {
  const router = useRouter();
  const pathName = router.pathname.slice(1);
  const motionName = data[pathName as keyof typeof data];

  return <div className="size-full">SyntaxViewer {motionName}</div>;
};
