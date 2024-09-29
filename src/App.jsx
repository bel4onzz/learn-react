import Parent from "./components/Parent";

const family = {
  name: "John (Parent)",
  children: [
    {
      name: "Alex (Child)",
      age: 30,
      grandchildren: [
        { name: "Liam (Grandchild)", hobby: "Playing Soccer" },
        { name: "Sophia (Grandchild)", hobby: "Drawing" },
      ],
    },
    {
      name: "Emma (Child)",
      age: 28,
      grandchildren: [{ name: "Noah (Grandchild)", hobby: "Reading" }],
    },
  ],
};

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="p-2 text-center text-secondary">Homework No.3 Ex.1</h2>
          <div className="p-4 text-center">
            <Parent name={family["name"]} childrenData={family["children"]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
