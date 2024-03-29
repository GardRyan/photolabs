import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  photo,
  photoId,
  toggleFavourite,
  favourites,
  openModal,
}) => {
  return (
    <div className="photo-list__item" key={photo.id}>
      <div className="photo-list__image-container">
        <PhotoFavButton
          photoId={photoId}
          toggleFavourite={toggleFavourite}
          favourites={favourites}
        />
        <img
          className="photo-list__image"
          src={photo.urls.regular}
          alt={photo.alt_description}
          onClick={() => openModal(photoId)}
        />
      </div>
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photo.user.profile}
          alt={photo.user.username}
        />
        <div className="photo-list__user-info">
          <span>{photo.user.username} </span>
          <span className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
