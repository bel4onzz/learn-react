import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todos, deleteTodo, editTodo, toggleComplete } =
    useContext(TodoContext);
  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEdit = (id, text) => {
    setEditingId(id);
    setNewText(text);
  };

  const saveEdit = (id) => {
    if (newText.trim()) {
      editTodo(id, newText);
      setEditingId(null);
    }
  };

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>Add some items to the list</p>
      ) : (
        todos.map((todo) => (
          <div key={todo.id} className="row align-items-center mt-4">
            <div className="col-2">
              <button
                className="btn btn-secondary w-100"
                onClick={() => toggleComplete(todo.id)}
              >
                {todo.isCompleted ? "Undo" : "Complete"}
              </button>
            </div>
            <div className="col-7">
              {editingId === todo.id ? (
                <input
                  className="form-control"
                  type="text"
                  value={newText}
                  onChange={(event) => setNewText(event.target.value)}
                />
              ) : (
                <span
                  style={{
                    textDecoration: todo.isCompleted ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
              )}
            </div>
            <div className="col-3">
              <div className="d-flex flex-row flex-wrap justify-content-between">
                {editingId === todo.id ? (
                  <button
                    className="btn btn-success w-50"
                    onClick={() => saveEdit(todo.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-info w-50"
                    onClick={() => handleEdit(todo.id, todo.text)}
                  >
                    Edit
                  </button>
                )}

                <button
                  className="btn btn-danger w-50"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
