import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, selectedTopic, viewByTopic, photos }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics &&
        topics.map((topic) => (
          <TopicListItem
            key={topic.id}
            topic={topic}
            selectedTopic={selectedTopic}
            viewByTopic={viewByTopic}
            photos={photos}
          />
        ))}
    </div>
  );
};

export default TopicList;
