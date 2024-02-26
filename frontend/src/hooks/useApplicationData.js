import { useReducer } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      const newFavouritesAdd = [...state.favourites, action.payload];
      return {
        ...state,
        favourites: newFavouritesAdd,
        hasFavourited: true,
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      const newFavouritesRemove = state.favourites.filter(
        (id) => id !== action.payload
      );
      return {
        ...state,
        favourites: newFavouritesRemove,
        hasFavourited: newFavouritesRemove.length > 0,
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const initialState = {
    selectedPhoto: null,
    favourites: [],
    hasFavourited: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: null });
  };

  const toggleFavourite = (photoId) => {
    if (state.favourites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  };

  return {
    ...state,
    openModal,
    closeModal,
    toggleFavourite,
  };
};

export default useApplicationData;
