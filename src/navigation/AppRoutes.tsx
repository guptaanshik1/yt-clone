import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import { FormPage } from "../pages/FormPage";
import { HomePage } from "../pages/HomePage";
import { SearchResults } from "../pages/SearchResults";
import { WatchPage } from "../pages/WatchPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={"/results"} element={<HomePage />} />
        <Route path={"/"} element={<SearchResults />} />
        <Route path={"/watch"} element={<WatchPage />} />
        <Route path={"/forms"} element={<FormPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
