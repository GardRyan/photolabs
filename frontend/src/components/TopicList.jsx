import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, selectedTopic }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics &&
        topics.map((topic) => (
          <TopicListItem
            key={topic.id}
            title={topic.title}
            onClick={selectedTopic}
          />
        ))}
    </div>
  );
};

export default TopicList;
