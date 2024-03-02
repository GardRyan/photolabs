import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({
  photos,
  toggleFavourite,
  favourites,
  openModal,
  filteredPhotoData,
  selectedTopic,
}) => {
  const displayData = selectedTopic ? filteredPhotoData : photos;

  return (
    <ul className="photo-list">
      {displayData.map((photo) => (
        <li key={photo.id} className="photo-list-item">
          <PhotoListItem
            photo={photo}
            photoId={photo.id}
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
