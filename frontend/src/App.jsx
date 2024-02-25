import React, { useState } from "react";

import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import topics from "./mocks/topics";
import photos from "./mocks/photos";

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
      <HomeRoute topics={topics} photos={photos} openModal={openModal} />
      {selectedPhoto && (
        <div className="photo-details-modal">
          <div className="photo-details-modal__top-bar">
            <button
              className="photo-details-modal__close-button"
              onClick={closeModal}
            >
              X
            </button>
          </div>
          <div className="photo-details-modal__images">
            {selectedPhoto.urls && selectedPhoto.urls.regular && (
              <img
                className="photo-details-modal__image"
                src={selectedPhoto.urls.regular}
              />
            )}
          </div>
          <div className="photo-details-modal__header">
            {/* Header content */}
          </div>
          <div className="photo-details-modal__photographer-details">
            {selectedPhoto.user && (
              <>
                <img
                  className="photo-details-modal__photographer-profile"
                  src={selectedPhoto.user.profile}
                />
                <div className="photo-details-modal__photographer-info">
                  <div>{selectedPhoto.user.username}</div>
                  <div className="photo-details-modal__photographer-location">
                    {selectedPhoto.location.city},{" "}
                    {selectedPhoto.location.country}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
