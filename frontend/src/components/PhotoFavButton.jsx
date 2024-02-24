import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(prev => !prev);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={
          isLiked ? "photo-list__fav-icon-svg" : "photo-list__fav-icon"
        }
      ></button>
    </div>
  );
}

export default PhotoFavButton;
