import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [like, setLike] = useState("no");

  const handleClick = () => {
    setLike(like === "yes" ? "no" : "yes");
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={
          like === "yes" ? "photo-list__fav-icon-svg" : "photo-list__fav-icon"
        }
      ></button>
    </div>
  );
}

export default PhotoFavButton;
