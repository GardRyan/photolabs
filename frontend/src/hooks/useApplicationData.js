import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload === null ? [] : action.payload,
      };
    case ACTIONS.FAV_PHOTO_ADDED:
      console.log("favphotoadded");
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
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoData: action.payload,
        topicData: state.topicData,
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
    selectedTopic: null,
    favourites: [],
    hasFavourited: false,
    photoData: [],
    topicData: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => {
        return response.json();
      })

      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      );
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => {
        return response.json();
      })
      .then((data) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
      );
  }, []);

  useEffect(() => {
    if (state.selectedTopic) {
      fetch(`/api/photos/${state.selectedTopic}`)
        .then((response) => response.json())
        .then((data) =>
          dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data })
        );
    }
  }, [state.selectedTopic]);

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: null });
  };

  const toggleFavourite = (photoId) => {
    if (state.favourites.includes(photoId)) {
      console.log("click");
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      console.log("noclick");
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  };

  return {
    state,
    openModal,
    closeModal,
    toggleFavourite,
  };
};

export default useApplicationData;
