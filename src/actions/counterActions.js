import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
} from "../constants";

export const increment = (data = 0) => ({
  type: COUNTER_INCREMENT,
  payload: data
});

export const decrement = () => ({
  type: COUNTER_DECREMENT,
});

export const reset = () => ({
  type: COUNTER_RESET,
});
