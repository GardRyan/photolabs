import React, { useCallback } from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, selectedTopic, viewByTopic, photos }) => {

  const handleClick = useCallback(() => {
    const topicIds = photos.map(photo => photo.TOPIC_ID);
    console.log(topicIds);

    viewByTopic(topicIds);
  }, [viewByTopic, photos]);

  return (
    <div
      className={`topic-list__item ${selectedTopic === topic.id ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
