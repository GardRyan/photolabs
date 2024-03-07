import React, { useCallback } from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topicId, topic, selectedTopic, viewByTopic }) => {

  const handleClick = () => {
    
    console.log(topicId);
    viewByTopic(topicId);
  };

  return (
    <div
      className={`topic-list__item ${
        selectedTopic === topicId ? "selected" : ""
      }`}
      onClick={handleClick}
    >
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
