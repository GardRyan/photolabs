import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";

const HomeRoute = ({
  topics,
  photos,
  openModal,
  toggleFavourite,
  favourites,
  hasFavourited,
}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} hasFavourited={hasFavourited} />
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
