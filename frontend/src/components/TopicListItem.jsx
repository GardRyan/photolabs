import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({title}) => {

  return (
    <div className="topic-list__item">
     <button>{title}</button>
    </div>
  );
};

export default TopicListItem;
