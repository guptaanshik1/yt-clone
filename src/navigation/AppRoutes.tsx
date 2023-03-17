import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import { HomePage } from "../pages/HomePage";
import { SearchResults } from "../pages/SearchResults";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/results"} element={<SearchResults />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
