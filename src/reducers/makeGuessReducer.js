import {
  NUMBER_GUESS,
  SET_FEEDBACK_MESSAGE,
  START_NEW_GUESS_GAME,
} from "../constants";

const initialState = {
  targetNumber: Math.floor(Math.random() * 100) + 1,
  number: 0,
  attempts: 0,
  history: [],
  feedback: "",
};

const feedbackMessage = (message = "") => {
  if (message) {
    return message;
  }
};

const makeGuessReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case NUMBER_GUESS:
      return {
        ...state,
        targetNumber: state.targetNumber === actions.payload ? Math.floor(Math.random() * 100) + 1 : state.targetNumber,
        number: actions.payload || 0,
        history: state.targetNumber === actions.payload ? [] : [...state.history, actions.payload],
        feedback: feedbackMessage(
          state.targetNumber === actions.payload
            ? "Correct"
            : state.targetNumber < actions.payload
            ? actions.payload + " is too high"
            : actions.payload + " is too low"
        ),
      };
    case SET_FEEDBACK_MESSAGE:
      return {
        ...state,
        feedback: feedbackMessage(actions.payload),
      };
    case START_NEW_GUESS_GAME:
      return {
        ...state,
        targetNumber: Math.floor(Math.random() * 100) + 1,
        number: 0,
        attempts: 0,
        history: [],
        feedback: "",
      };

    default:
      return state;
  }
};
export default makeGuessReducer;
