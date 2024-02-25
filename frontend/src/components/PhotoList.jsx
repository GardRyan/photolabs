import React from "react";
import PhotoListItem from "./PhotoListItem"
import "../styles/PhotoList.scss";


const PhotoList = ({photos, toggleFavourite, favourites}) => {
  return (
    <ul className="photo-list">
       {photos.map((photo) => (
          <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavourite={toggleFavourite}
          isFavourite={favourites.includes(photo.id)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
