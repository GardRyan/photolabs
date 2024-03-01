import React, { useCallback } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import FavBadge from "./FavBadge";

function PhotoFavButton({ photoId, toggleFavourite, favourites }) {

  const isFavourite = favourites?.includes(photoId) || false;
  
  const handleClick = useCallback(() => {
    
    toggleFavourite(photoId);
  }, [toggleFavourite, photoId]);

  const iconClassName = isFavourite ? "photo-list__fav-icon-svg" : "photo-list__fav-icon";

  return (
    <div className="photo-list__fav-icon-container" onClick={handleClick} >
      <FavBadge className={iconClassName} selected={isFavourite} />
    </div>
  );
}

export default PhotoFavButton;
