import { NUMBER_GUESS } from "../constants";
console.log("HELLO GUESS ACTION ::> ")
export const makeGuess = (data = 0) => ({
    type: NUMBER_GUESS,
    payload: data
})