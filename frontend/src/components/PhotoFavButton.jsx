import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ photoId, toggleFavourite, favourites }) {
  const isFavourite = favourites?.includes(photoId) || false;

  const handleClick = () => {
    toggleFavourite(photoId);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={isFavourite ? "favorited" : "not-favorited"}
      >
        {isFavourite ? "Favourited" : "Not Favourited"}
      </button>
    </div>
  );
}

export default PhotoFavButton;
