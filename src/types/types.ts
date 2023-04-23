export type isDark = "light" | "dark";

export interface IconProps {
  size?: string;
  color?: string;
  iconName: string;
}

export interface IPlaylistsFilters {
  collections: [
    {
      filter: string;
      title: string;
    }
  ];
}

export interface IBaseResponse {
  pages: IVideosResponse[];
  pageParams: any[];
}

export interface IVideosResponse {
  contents: IContent[];
  cursorNext: string;
  estimatedResults: number;
  filterGroups: IFilterGroup[];
}

export interface IContent {
  type: string;
  video: IVideo;
}

export interface IVideo {
  author: IAuthor;
  badges: string[];
  descriptionSnippet: string;
  isLiveNow: boolean;
  lengthSeconds: number;
  movingThumbnail: IThumbnail[];
  publishedTimeText: string;
  stats: IStats;
  thumbnails: IThumbnail[];
  title: string;
  videoId: string;
}

export interface IAuthor {
  avatar: IThumbnail[];
  badges: IBadge[];
  channelId: string;
  title: string;
}

export interface IBadge {
  text: string;
  type: string;
}

export interface IThumbnail {
  width: number;
  url: string;
  height: string;
}

export interface IStats {
  views: number;
}

export interface IFilterGroup {
  filters: IFilter[];
  title: string;
}

export interface IFilter {
  cursorSelect?: string;
  label: string;
  selected: boolean;
}
