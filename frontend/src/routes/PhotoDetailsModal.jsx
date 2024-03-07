import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({
  closeModal,
  selectedPhoto,
  toggleFavourite,
  favourites,
  openModal,
  filteredPhotoData,
}) => {
  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button
          className="photo-details-modal__close-button"
          onClick={closeModal}
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          photoId={selectedPhoto.id}
          toggleFavourite={toggleFavourite}
          favourites={favourites}
        />
        {selectedPhoto.urls && selectedPhoto.urls.regular && (
          <img
            className="photo-details-modal__image"
            src={selectedPhoto.urls.full}
          />
        )}
      </div>
      <div className="photo-details-modal__header">
        {/* Header content ??? */}
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
                {selectedPhoto.location.city}, {selectedPhoto.location.country}
              </div>
            </div>
          </>
        )}
      </div>
      <div>
        <div className="photo-details-modal__similar_photos">
          <span className="photo-details-modal__title_similar_photos">Similar Photos</span>
          <PhotoList
            filteredPhotoData={filteredPhotoData}
            toggleFavourite={toggleFavourite}
            favourites={favourites}
            openModal={openModal}
            photos={selectedPhoto.similar_photos}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
