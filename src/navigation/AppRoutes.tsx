import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import { Channel } from "../pages/Channel";
import AboutTab from "../pages/Channel/components/AboutTab";
import HomeTab from "../pages/Channel/components/HomeTab";
import LiveTab from "../pages/Channel/components/LiveTab";
import PlaylistsTabs from "../pages/Channel/components/PlaylistsTabs";
import ShortsTab from "../pages/Channel/components/ShortsTab";
import VideosTab from "../pages/Channel/components/VideosTab";
import { FormPage } from "../pages/FormPage";
import { HomePage } from "../pages/HomePage";
import { SearchResults } from "../pages/SearchResults";
import { WatchPage } from "../pages/WatchPage";
import { ChannelChannels } from "../pages/Channel/ChannelChannels";
import { ShortsPlayer } from "../components/ShortsPlayer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/results"} element={<SearchResults />} />
        <Route path={"/watch"} element={<WatchPage />} />
        <Route path={"/forms"} element={<FormPage />} />
        <Route path={"/watch-shorts"} element={<ShortsPlayer />} />
        <Route path={"/:channelName"} element={<Channel />}>
          <Route path={"featured"} element={<HomeTab />} />
          <Route path={"videos"} element={<VideosTab />} />
          <Route path={"shorts"} element={<ShortsTab />} />
          <Route path={"streams"} element={<LiveTab />} />
          <Route path={"playlists"} element={<PlaylistsTabs />} />
          <Route path={"channels"} element={<ChannelChannels />} />
          <Route path={"about"} element={<AboutTab />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
