export const formatDuration = (duration: number): string => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = Math.floor(duration % 60);

  let time = "";
  if (hours > 0) {
    time += `${hours}:`;
  }
  if (hours > 0 || minutes > 0) {
    time += (minutes < 10 ? "0" + minutes : minutes) + ":";
  }
  time += seconds < 10 ? "0" + seconds : seconds;

  return time;
};
