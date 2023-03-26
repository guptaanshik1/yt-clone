import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

interface IProps {
  children?: ReactNode;
}

const Layout = ({ children }: IProps) => {
  const showSidebar = useAppSelector((state) => state.sidebar.showSidebar);
  return (
    <>
      <Header />
      {showSidebar && <Sidebar />}
      <Outlet />
    </>
  );
};

export default Layout;
