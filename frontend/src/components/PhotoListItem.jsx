import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
 return (
  <div key={id}>
    <img src={imageSource} />
    <img src={profile} />
    <span>
    {username},
    {location.city},
    {location.country}
    </span>
  </div>
 );
};

export default PhotoListItem;
