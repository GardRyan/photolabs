import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({title, onClick}) => {

  return (
    <div className="topic-list__item" onClick={() => onClick(title)}>
     <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
