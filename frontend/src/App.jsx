import React, { useState } from "react";

import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation

const App = () => {
  const {
    useState(null),
    openModal,
    closeModal,
    useState([]),
    useState(false),
    toggleFavourite 
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        openModal={openModal}
        toggleFavourite={toggleFavourite}
        favourites={favourites}
        hasFavourited={hasFavourited}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
          closeModal={closeModal}
          similarPhotos={selectedPhoto.similar_photos || []}
          toggleFavourite={toggleFavourite}
          favourites={favourites}
        />
      )}
      ;
    </div>
  );
};

export default App;
