import { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-10">
          <input
            className="form-control"
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Add a new todo"
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-primary w-100"
            type="submit"
            disabled={!text.trim()}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
