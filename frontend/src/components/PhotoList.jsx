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
  console.log("dd", displayData);
  return (
    <ul className="photo-list">
      {Array.isArray(displayData)
        ? displayData.map((photo) => (
            <li key={photo.id} className="photo-list-item">
              <PhotoListItem
                photo={photo}
                toggleFavourite={toggleFavourite}
                favourites={favourites}
                openModal={openModal}
              />
            </li>
          ))
        : null}
    </ul>
  );
};

export default PhotoList;
