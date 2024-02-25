import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";

const HomeRoute = ({ topics, photos, openModal}) => {
  const [favourites, setFavourites] = useState([]);
  const [hasFavourited, setHasFavourited] = useState(false);

  //this could be an issue with passing props down
  //I believe this needs an answer to render but
  //photofavbutton renders after this.

  const toggleFavourite = (photoId) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.includes(photoId)) {
        const updatedFavourites = prevFavourites.filter((id) => id !== photoId);
        setHasFavourited(updatedFavourites.length > 0); 
        return updatedFavourites;
      } else {
        setHasFavourited(true); 
        return [...prevFavourites, photoId];
      }
    });
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} hasFavourited={hasFavourited}/>
      <PhotoList
        photos={photos}
        toggleFavourite={toggleFavourite}
        favourites={favourites}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
