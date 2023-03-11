import React from "react";
import HomePageView from "./HomePage.view";
import { HomePageContext } from "./utils/context";

export default function HomePageContainer() {
  return (
    <HomePageContext.Provider value={null}>
      <HomePageView />
    </HomePageContext.Provider>
  );
}
