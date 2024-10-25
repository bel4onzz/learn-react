import { SEARCH_CHARACTER } from "../constants";

export const searchCharacter = (characterName) => {
  return { type: SEARCH_CHARACTER, payload: characterName };
};
