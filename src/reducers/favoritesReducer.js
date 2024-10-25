const initialState = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE": {
      const updatedFavorites = [...state, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    }
    default:
      return state;
  }
};

export default favoritesReducer;
