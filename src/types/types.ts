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
