import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list_item" key={props.id}>
      <img className="photo-list_image" src={props.imageSource} />
      <div className="photo-list_user-details">
        <img className="photo-list_user-profile" src={props.profile} />
        <div className="photo-list_user-info">
          <span>{props.username} </span>
          <span className="photo-list_user-location">
            {props.location.city},{props.location.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
