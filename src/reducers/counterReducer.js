import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
} from "../constants";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {

  switch (action.type) {
    case COUNTER_INCREMENT:
      return { ...state, count: state.count + (action.payload || 1)};
    case COUNTER_DECREMENT:
      return { ...state, count: state.count - 1 };
    case COUNTER_RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default counterReducer;
