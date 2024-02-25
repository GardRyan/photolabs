import React, { useState } from "react";

import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        openModal={openModal}
        closeModal={closeModal}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
          closeModal={closeModal}
          similarPhotos={selectedPhoto.similar_photos || []}
        />
      )}
      ;
    </div>
  );
};

export default App;
