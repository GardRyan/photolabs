import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";

const HomeRoute = ({ topics, photos }) => {
  const [favourites, setFavourites] = useState([]);


  //this could be an issue with passing props down
  //I believe this needs an answer to render but
  //photofavbutton renders after this.
  
  const toggleFavourite = (photoId) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.includes(photoId)) {
        return prevFavourites.filter((id) => id !== photoId);
      } else {
        return [...prevFavourites, photoId];
      }
    });
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList
        photos={photos}
        toggleFavourite={toggleFavourite}
        favourites={favourites}
      />
    </div>
  );
};

export default HomeRoute;
