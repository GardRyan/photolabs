import React, { useCallback } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import FavBadge from "./FavBadge";

function PhotoFavButton({ photoId, toggleFavourite, favourites }) {
  const isFavourite = favourites?.includes(photoId) || false;

  const handleClick = () => {
    toggleFavourite(photoId);
  };

  const iconClassName = isFavourite
    ? "photo-list__fav-icon-svg"
    : "photo-list__fav-icon";

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <FavBadge className={iconClassName} selected={isFavourite} />
    </div>
  );
}

export default PhotoFavButton;
