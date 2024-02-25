import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, toggleFavourite, favourites }) => {
  return (
    <div className="photo-list_item" key={photo.id}>
      <img
        className="photo-list_image"
        src={photo.urls.regular}
        alt={photo.alt_description}
      />
      <PhotoFavButton
        photoId={photo.id}
        toggleFavourite={toggleFavourite}
        favourites={favourites}
      />
      <div className="photo-list_user-details">
        <img
          className="photo-list_user-profile"
          src={photo.user.profile}
          alt={photo.user.username}
        />
        <div className="photo-list_user-info">
          <span>{photo.user.username} </span>
          <span className="photo-list_user-location">
            {photo.location.city}, {photo.location.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
