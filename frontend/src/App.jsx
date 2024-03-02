import React, { useState } from "react";

import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation

const App = () => {
  const { state, openModal, closeModal, toggleFavourite, viewByTopic } =
    useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        openModal={openModal}
        favourites={state.favourites}
        hasFavourited={state.hasFavourited}
        selectedTopic={state.selectedTopic}
        viewByTopic={viewByTopic}
        filteredPhotoData={state.filteredPhotoData}
      />
      {state.selectedPhoto && (
        <PhotoDetailsModal
          selectedPhoto={state.selectedPhoto}
          setSelectedPhoto={state.setSelectedPhoto}
          closeModal={closeModal}
          similarPhotos={state.selectedPhoto.similar_photos || []}
          toggleFavourite={toggleFavourite}
          favourites={state.favourites}
        />
      )}
      ;
    </div>
  );
};

export default App;
