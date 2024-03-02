import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ filteredPhotoData, topics, selectedTopic, viewByTopic, photos }) => {
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
            filteredPhotoData={filteredPhotoData}
          />
        ))}
    </div>
  );
};

export default TopicList;
