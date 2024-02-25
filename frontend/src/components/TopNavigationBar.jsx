import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ topics, hasFavourited }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      {hasFavourited && (
        <div className="notification">You have favourited photos!</div>
      )}
    </div>
  );
};

export default TopNavigation;
