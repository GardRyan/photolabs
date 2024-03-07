import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, selectedTopic, viewByTopic }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics &&
        topics.map((topic) => (
          <TopicListItem
            key={topic.id}
            topic={topic}
            topicId={topic.id}
            selectedTopic={selectedTopic}
            viewByTopic={viewByTopic}
          />
        ))}
    </div>
  );
};

export default TopicList;
