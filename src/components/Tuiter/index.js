import React from "react";
import { Outlet } from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";

const Tuiter = () => {
  return (
    <div className="row mt-2">
      <div className="col-2 col-lg-1 col-xl-2">
        <NavigationSidebar active="profile"/>
      </div>
      <div className="col-8 col-lg-7 col-xl-6">
        <Outlet />
      </div>
      <div className="col-2 col-lg-4 col-xl-4">
        <WhoToFollowList />
      </div>
    </div>
  );
};
export default Tuiter;
