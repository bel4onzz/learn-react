import {
  NUMBER_GUESS,
  SET_FEEDBACK_MESSAGE,
  START_NEW_GUESS_GAME,
} from "../constants";

export const makeGuess = (data = 0) => ({
  type: NUMBER_GUESS,
  payload: data,
});
export const setFeedbackMessage = (data = "") => ({
  type: SET_FEEDBACK_MESSAGE,
  payload: data,
});
export const startNewGame = () => ({
  type: START_NEW_GUESS_GAME,
});
