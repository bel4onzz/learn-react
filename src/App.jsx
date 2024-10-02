import DynamicCounter from "./components/DynamicCounter";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="p-2 text-center text-secondary">Homework No.3 ex. 1</h2>
          <div className="p-4 text-center">
            <DynamicCounter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
