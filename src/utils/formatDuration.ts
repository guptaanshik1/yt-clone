export const formatDuration = (duration: number): string => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = Math.floor(duration % 60);

  let time = "";

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  if (hours > 0) {
    time += `${hours}`;
  }
  time += `${formattedMinutes}:${formattedSeconds}`;

  return time;
};
