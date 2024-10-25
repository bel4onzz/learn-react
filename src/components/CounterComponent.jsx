import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../actions/counterActions";


const CounterComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => dispatch(increment(5))}
        style={{ margin: "5px", padding: "10px" }}
      >
        Increment + 5
      </button>
      <button
        onClick={() => dispatch(increment())}
        style={{ margin: "5px", padding: "10px" }}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ margin: "5px", padding: "10px" }}
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(reset())}
        style={{
          margin: "5px",
          padding: "10px",
          backgroundColor: "red",
          color: "white",
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default CounterComponent;
