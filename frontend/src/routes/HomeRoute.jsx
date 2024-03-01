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
  selectedPhoto,
  selectedTopic,
  viewByTopic
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        hasFavourited={hasFavourited}
        selectedTopic={selectedTopic}
        photos={photos}
        viewByTopic={viewByTopic}
      />
      <PhotoList
        photos={photos}
        toggleFavourite={toggleFavourite}
        favourites={favourites}
        openModal={openModal}
        selectedPhoto={selectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
