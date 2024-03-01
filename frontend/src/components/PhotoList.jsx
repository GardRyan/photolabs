import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, toggleFavourite, favourites, openModal }) => {
  return (
    <ul className="photo-list">
      {photos &&
        photos.map((photo) => (
          <li key={photo.id} className="photo-list-item">
            <PhotoListItem
              photo={photo}
              toggleFavourite={toggleFavourite}
              favourites={favourites}
              openModal={openModal}
            />
          </li>
        ))}
    </ul>
  );
};

export default PhotoList;
