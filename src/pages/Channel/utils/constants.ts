export const routeConstants = {
  Home: "featured",
  Videos: "videos",
  Shorts: "shorts",
  Live: "streams",
  Playlists: "playlists",
  Channels: "channels",
  About: "about",
};

export const playlistMenu = {
  "Date Added (newest)": "created_playlists_last_video_added",
  "Last Video Added": "created_playlists_newest",
};

export type TChannelsFilter = {
  filter: string;
  title: string;
};

export const ALL_COLLECTIONS_FILTER = "all_collections";
export const ALL_COLLECTIONS_TITLE = "All Collections";
