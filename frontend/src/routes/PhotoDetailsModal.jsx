import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({closeModal, selectedPhoto, setSelectedPhoto}) => {
  
  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={() => closeModal} >
          <img src={closeSymbol}  alt="close symbol" />
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
      <div className="photo-details-modal__header">{/* Header content ??? */}</div>
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
    </div>
  );
};

export default PhotoDetailsModal;
