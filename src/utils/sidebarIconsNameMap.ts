interface sidebar {
  iconName: string;
  auth: "common" | "auth" | "non-auth";
}

export const sidebarIconsNameMap: sidebar[] = [
  {
    iconName: "Home",
    auth: "common",
  },
  {
    iconName: "Explore",
    auth: "auth",
  },
  {
    iconName: "Shorts",
    auth: "common",
  },
  {
    iconName: "Subscriptions",
    auth: "common",
  },
  {
    iconName: "Library",
    auth: "non-auth",
  },
  {
    iconName: "History",
    auth: "common",
  },
];

export const sidebarExploreIconsNameMap: sidebar[] = [
  {
    iconName: "Trending",
    auth: "common",
  },
  {
    iconName: "Shopping",
    auth: "non-auth",
  },
  {
    iconName: "Music",
    auth: "common",
  },
  // {
  //   iconName: "Movies",
  //   auth: "common",
  // },
  // {
  //   iconName: "Live",
  //   auth: "common",
  // },
  {
    iconName: "Gaming",
    auth: "common",
  },
  {
    iconName: "News",
    auth: "common",
  },
  {
    iconName: "Sport",
    auth: "common",
  },
  {
    iconName: "Learning",
    auth: "common",
  },
  {
    iconName: "Fashion & Beauty",
    auth: "common",
  },
];

export const moreFromYtIconNameMap: sidebar[] = [
  {
    iconName: "Premium",
    auth: "common",
  },
  {
    iconName: "Creator",
    auth: "common",
  },
  {
    iconName: "Music",
    auth: "common",
  },
  {
    iconName: "Kids",
    auth: "common",
  },
  {
    iconName: "TV",
    auth: "common",
  },
];

export const commonIconNameMap: sidebar[] = [
  {
    iconName: "Settings",
    auth: "common",
  },
  {
    iconName: "Report history",
    auth: "common",
  },
  {
    iconName: "Help",
    auth: "common",
  },
  {
    iconName: "Send feedback",
    auth: "common",
  },
];
