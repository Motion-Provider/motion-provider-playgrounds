const getMotionKey = (data: string, prefix: string, median: string) =>
  `${prefix}-${median}-${data.split(" ").join("-")}`;

export default getMotionKey;
