import UserDetailsForm from "./components/UserDetailsForm";
import Header from "./layouts/Header";
import Navigation from "./layouts/Navigation";

function App() {
  return (
    <>
      <div className="min-h-full">
        <Navigation />
        <Header />
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <UserDetailsForm />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
