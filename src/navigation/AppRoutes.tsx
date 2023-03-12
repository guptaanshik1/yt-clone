import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import { HomePage } from "../pages/HomePage";

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
