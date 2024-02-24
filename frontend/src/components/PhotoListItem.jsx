import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({props}) => {
  return (
    <div className="photo-list_item" key={props.id}>
      <img className="photo-list_image" src={props.urls.regular} />
      <PhotoFavButton />
      <div className="photo-list_user-details">
        <img className="photo-list_user-profile" src={props.user.profile} />
        <div className="photo-list_user-info">
          <span>{props.user.username} </span>
          <span className="photo-list_user-location">
            {props.location.city},{props.location.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
