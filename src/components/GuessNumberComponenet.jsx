import { useDispatch, useSelector } from "react-redux";
import { makeGuess } from "../actions/makeGuessActions";
import { useEffect, useState } from "react";

const GuessNumberComponenet = () => {
  const dispatch = useDispatch();
  const MY_NUMBER = useSelector((state) => state.targetNumber);
  const USER_GUESSR = useSelector((state) => state.number);
  const FEEDBACK_MESSAGE = useSelector((state) => state.feedback);

  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (!inputValue || inputValue > 100) return;
    if (!Number(inputValue)) return;

    console.log("INPUT VALUE :::> ", inputValue);

    const timeoutId = setTimeout(() => {
      handleSubmit(); // Submit data after 2 seconds of inactivity
    }, 2000);

    const handleSubmit = () => {
      setLoading(true);
      //   console.log("Submitting data:", inputValue);
      dispatch(makeGuess(inputValue));
      // Simulate an API call
      setTimeout(() => {
        setLoading(false); // Reset submitting state after submission
      }, 1000); // Simulate a 1-second API call
    };
    return () => clearTimeout(timeoutId);
  }, [inputValue, dispatch]);

  return (
    <>
      <div className="w-full max-w-xs">
        <h1>GUESS THE NUMBER {MY_NUMBER}</h1>
        <h1>GUESS THE NUMBER {USER_GUESSR}</h1>
        <h1>GUESS THE NUMBER {FEEDBACK_MESSAGE}</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="guessedNumber"
            >
              #
            </label>
            <input
              value={inputValue}
              onChange={handleInputChange}
              disabled={loading}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="guessedNumber"
              type="text"
              placeholder="Start typing number here..."
            />
            {FEEDBACK_MESSAGE && (
              <p className="text-red-500 text-xs italic">
                {inputValue} is {FEEDBACK_MESSAGE}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password. {inputValue}
            </p>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-password"
              >
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </>
  );
};
export default GuessNumberComponenet;
