export const formatViewCount = (viewCount: string) => {
  if (parseInt(viewCount) >= 1000000000)
    return (parseInt(viewCount) / 1000000000).toFixed(1) + "B";
  if (parseInt(viewCount) >= 1000000)
    return (parseInt(viewCount) / 1000000).toFixed(1) + "M";
  if (parseInt(viewCount) >= 1000)
    return (parseInt(viewCount) / 1000).toFixed(1) + "K";
  return viewCount;
};
