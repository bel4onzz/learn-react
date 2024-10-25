import { ADD_FAVORITE, REMOVE_FAVORITE } from "../constants";

export const addFavorite = (character) => {
  return { type: ADD_FAVORITE, payload: character };
};
export const removeFavorite = (character) => {
  return { type: REMOVE_FAVORITE, payload: character };
};
