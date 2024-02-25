import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ photoId, toggleFavourite, favourites }) {
  const isFavourite = favourites?.includes(photoId) || false;

  const handleClick = () => {
    toggleFavourite(photoId);
  };

  return (
    <div className="photo-list__fav-icon-container">
      <button
        onClick={handleClick}
        className={`photo-list__fav-icon ${isFavourite ? "favorited" : "not-favorited"}`}
      >
        <FavIcon className="photo-list__fav-icon-svg" />
      </button>
    </div>
  );
}

export default PhotoFavButton;
