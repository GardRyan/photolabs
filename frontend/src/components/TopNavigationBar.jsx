import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ topics, hasFavourited, selectedTopic, viewByTopic }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} selectedTopic={selectedTopic} viewByTopic={viewByTopic} />
      <FavBadge isFavPhotoExist={hasFavourited} />
    </div>
  );
};

export default TopNavigation;
