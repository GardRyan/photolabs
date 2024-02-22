import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
 return (
  <div key={props.id}>
    <img src={props.imageSource} />
    <img src={props.profile} />
    <span>{props.username} </span>
    <span>
    {props.location.city},
     {props.location.country}
    </span>
  </div>
 );
};

export default PhotoListItem;
