import { GetMotionKey } from "@/interfaces/@types-utils";

const getMotionKey: GetMotionKey = (data, prefix, median) =>
  `${prefix}-${median}-${data.split(" ").join("-")}`;

export default getMotionKey;
