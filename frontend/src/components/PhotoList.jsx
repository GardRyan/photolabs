import React from "react";
import PhotoListItem from "./PhotoListItem"
import "../styles/PhotoList.scss";


const PhotoList = ({ photos, toggleFavourite, favourites, openModal, closeModal }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id} className="photo-list-item">
          <PhotoListItem
            photo={photo}
            toggleFavourite={toggleFavourite}
            isFavourite={favourites.includes(photo.id)}
            openModal={openModal}
            closeModal={closeModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
