import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import { FormPage } from "../pages/FormPage";
import { HomePage } from "../pages/HomePage";
import { SearchResults } from "../pages/SearchResults";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={"/results"} element={<HomePage />} />
        <Route path={"/"} element={<SearchResults />} />
        <Route path={"/forms"} element={<FormPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
