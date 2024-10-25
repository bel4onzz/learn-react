import { ADD_FAVORITE, REMOVE_FAVORITE } from "../constants";

const initialState = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      const exists = state.some(
        (favorite) => favorite.id === action.payload.id
      );

      if (exists) {
        // If it exists, return the current state (do not add)
        return state;
      }

      // If it does not exist, add the new favorite
      const updatedFavorites = [...state, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    }

    case REMOVE_FAVORITE: {
      // Filter out the favorite to be removed
      const updatedFavorites = state.filter(
        (favorite) => favorite.id !== action.payload.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    }
    default:
      return state;
  }
};

export default favoritesReducer;
