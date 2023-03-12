import React, { ReactNode } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
};

export default Layout;
