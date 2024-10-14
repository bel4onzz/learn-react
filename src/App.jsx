import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="p-2 text-center text-secondary">
            Homework No.8 - Todo List
          </h2>
          <div className="p-4 text-center">
            <TodoProvider>
              <AddTodo />
              <TodoList />
            </TodoProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
