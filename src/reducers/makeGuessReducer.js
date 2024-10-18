import { NUMBER_GUESS, SET_FEEDBACK_MESSAGE } from "../constants";

const initialState = {
  targetNumber: Math.floor(Math.random() * 100) + 1,
  number: 0,
  attempts: 0,
  history: [],
  feedback: "",
};

const feedbackMessage = (message = "") => {
  console.log("SET FEEDBACK MESSAGE");
  return message;
};

const makeGuessReducer = (state = initialState, actions) => {
  console.log("HELLO GUESS REDUCER ::> ", state);
  console.log("HELLO GUESS REDUCER ::> ", actions.payload);
  switch (actions.type) {
    case NUMBER_GUESS:
      return {
        ...state,
        number: actions.payload || 0,
        history: [...state.history, actions.payload],
        feedback: feedbackMessage(actions.payload),
      };
    case SET_FEEDBACK_MESSAGE:
      return {
        ...state,
        feedback: feedbackMessage(actions.payload),
      };

    default:
      return state;
  }
};
export default makeGuessReducer;
