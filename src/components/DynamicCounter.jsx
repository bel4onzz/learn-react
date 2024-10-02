import { useState, useEffect } from "react";

function DynamicCounter() {
  const [counter, setCounter] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const handleSetCounter = (direction) => {
    if (direction === "increment") {
      if (counter < 10) {
        setCounter((prevCounter) => prevCounter + 1);
      }
    } else {
      if (counter > "-10") {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }
  };

  const resetCounter = () => {
    setCounter(0);
  };

  // set background color whitout state for backgroundColor and useEffect
  // const opacity = counter && Math.min(Math.abs(counter) * 0.1, 1);
  // let backgroundColor;
  // if (counter > 0) {
  //   backgroundColor = `rgba(90, 122, 209, ${opacity})`; // Increment color
  // } else if (counter < 0) {
  //   backgroundColor = `rgba(232, 44, 79, ${opacity})`; // Decrement color
  // } else {
  //   backgroundColor = "#ffffff"; // counter = 0 color
  // }

  useEffect(() => {
    const opacity = Math.min(Math.abs(counter) * 0.1, 1); // Opacity for positive/negative counters

    if (counter > 0) {
      setBackgroundColor(`rgba(90, 122, 209, ${opacity})`); // Increment color
    } else if (counter < 0) {
      setBackgroundColor(`rgba(232, 44, 79, ${opacity})`); // Decrement color
    } else {
      setBackgroundColor("#ffffff"); // counter = 0 color
    }
  }, [counter]);

  return (
    <div
      className="border border-primary p-4 vh-80"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="row align-items-center mb-4">
        {/* Decrement Button */}
        <div className="col-4 p-0 text-start">
          <button
            className={`btn btn-danger w-100 ${
              counter <= -10 ? "disabled" : ""
            }`}
            onClick={() => handleSetCounter("decrement")}
          >
            Decrement
          </button>
        </div>

        {/* Counter */}
        <div className="col-4 p-0 text-center">
          <p
            className={`fs-3 mb-1 ${
              Math.abs(counter) >= 5 ? "text-white" : "text-dark"
            }`}
          >
            {counter}
          </p>
        </div>

        {/* Increment Button */}
        <div className="col-4 p-0 text-end">
          <button
            className={`btn btn-success w-100 ${
              counter >= 10 ? "disabled" : ""
            }`}
            onClick={() => handleSetCounter("increment")}
          >
            Increment
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 p-0">
          <button
            className="btn btn-primary w-100"
            onClick={() => resetCounter()}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default DynamicCounter;
