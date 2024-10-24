import CounterComponent from "./components/CounterComponent";
import GuessNumberComponenet from "./components/GuessNumberComponenet";
import Header from "./layouts/Header";
import Navigation from "./layouts/Navigation";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <>
      <div className="min-h-full">
        <Navigation />
        <Header />
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Provider store={store.guessedNumber}>
              <GuessNumberComponenet />
            </Provider>
            <Provider store={store.counterStore}>
              <CounterComponent />
            </Provider>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
