import UnorderedList from "./layouts/UnorderedList";

function App() {
  const tasks = [
    { name: "Learn React", priority: "High" },
    { name: "Do Groceries", priority: "Low" },
    { name: "Exercise", priority: "High" },
    { name: "Read a Book", priority: "Medium" },
  ];

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-6">
          <h2 className="p-2 text-center text-secondary">Homework No.2</h2>
          <div className="p-4 text-center">
            <UnorderedList items={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
