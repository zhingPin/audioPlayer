import React from "react";
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import "./sidebar.module.css";
import SidebarButton from "./sidebarButton/sidebarButton";

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <img
        src="https://pbs.twimg.com/profile_images/1442081383908790273/F5pP7dgr_400x400.jpg"
        alt="profile-pic"
        className="profile_image"
      />
      <div>
        <SidebarButton title="feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favourites"
          to="/favourites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
};

export default Sidebar;
