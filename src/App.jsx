import CounterComponent from "./components/CounterComponent";
import GuessNumberComponenet from "./components/GuessNumberComponenet";
import UserDetailsForm from "./components/UserDetailsForm";
import Header from "./layouts/Header";
import Navigation from "./layouts/Navigation";
import { Provider } from "react-redux";
import store from "./store/counter";

function App() {
  return (
    <>
      <div className="min-h-full">
        <Navigation />
        <Header />
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1>{
              console.log("HE", store.guessedNumber)}</h1>
            <Provider store={store.guessedNumber}>
              <GuessNumberComponenet />
            </Provider>
            <Provider store={store.counterStore}>
              <CounterComponent />
            </Provider>
            <UserDetailsForm />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
