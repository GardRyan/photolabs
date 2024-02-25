import { useState } from 'react';

const useApplicationData = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [hasFavourited, setHasFavourited] = useState(false);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const toggleFavourite = (photoId) => {
    setFavourites((prevFavourites) => {
      const isFavourited = prevFavourites.includes(photoId);
      const updatedFavourites = isFavourited
        ? prevFavourites.filter((id) => id !== photoId)
        : [...prevFavourites, photoId];

      setHasFavourited(updatedFavourites.length > 0);
      return updatedFavourites;
    });
  };

  return {
    selectedPhoto,
    openModal,
    closeModal,
    favourites,
    hasFavourited,
    toggleFavourite,
  };
};

export default useApplicationData;


export default useApplicationData;