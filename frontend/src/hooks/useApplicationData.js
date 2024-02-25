const useApplicationData = () {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const [favourites, setFavourites] = useState([]);
  const [hasFavourited, setHasFavourited] = useState(false);

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
}

export default useApplicationData;