import { useDispatch, useSelector } from "react-redux";
import {
  makeGuess,
  setFeedbackMessage,
  startNewGame,
} from "../actions/makeGuessActions";
import { useEffect, useState } from "react";

const GuessNumberComponenet = () => {
  const dispatch = useDispatch();
  const MY_NUMBER = useSelector((state) => state.targetNumber);
  const FEEDBACK_MESSAGE = useSelector((state) => state.feedback);
  const GUESSING_HISTORY = useSelector((state) => state.history);

  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleStartNewGame = () => {
    setInputValue("");
    dispatch(startNewGame());
  };

  useEffect(() => {
    if (!inputValue) {
      dispatch(setFeedbackMessage(""));
      return;
    }
    if (inputValue > 100 || !Number(inputValue)) {
      dispatch(
        setFeedbackMessage("Input should be a number between 1 and 100")
      );
      return;
    }

    const timeoutId = setTimeout(() => {
      handleSubmit();
    }, 500);

    const handleSubmit = () => {
      setLoading(true);

      setTimeout(() => {
        dispatch(makeGuess(Number(inputValue)));

        setLoading(false);
      }, 1000);
    };

    return () => clearTimeout(timeoutId);
  }, [inputValue, dispatch]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto">
        <h1>
          <strong>GUESS THE NUMBER: </strong>
          <span>{MY_NUMBER}</span>
        </h1>
        <form
          onSubmit={(event) => event.preventDefault()}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="guessedNumber"
            >
              Your input
            </label>
            <input
              value={inputValue}
              onChange={handleInputChange}
              disabled={loading}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="guessedNumber"
              type="text"
              placeholder="Start typing here..."
            />
            {FEEDBACK_MESSAGE && (
              <p className="text-red-500 text-xs italic">{FEEDBACK_MESSAGE}</p>
            )}
          </div>
          <div className="flex items-center justify-end">
            <a
              className="inline-block cursor-pointer align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              onClick={handleStartNewGame}
            >
              Start New Game
            </a>
          </div>
        </form>

        <h1>
          <strong>GUESSING HISTORY: </strong>
          <span>
            {GUESSING_HISTORY.map((item, index) => {
              if (index < GUESSING_HISTORY.length - 1) {
                return item + ", ";
              }
              return item;
            })}
          </span>
        </h1>
      </div>
    </>
  );
};
export default GuessNumberComponenet;
