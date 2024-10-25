import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import CounterComponent from "./components/CounterComponent";
// import GuessNumberComponenet from "./components/GuessNumberComponenet";
// import Header from "./layouts/Header";
// import Navigation from "./layouts/Navigation";
// import { Provider } from "react-redux";
// import store from "./store/index";
import AppLayout from "./layouts/AppLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import CharactersRoot from "./pages/CharactersRoot";
import Characters, { loader as characterLoader } from "./pages/Characters";

// function App() {
//   return (
//     <>
//       <div className="min-h-full">
//         <Navigation />
//         <Header />
//         <main>
//           <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
//             <Provider store={store.guessedNumber}>
//               <GuessNumberComponenet />
//             </Provider>
//             <Provider store={store.counterStore}>
//               <CounterComponent />
//             </Provider>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        title: "Welcome to Characters App",
      },
      // {
      //   path: "favorites",
      //   element: <Favorites />,
      // },
      {
        path: "characters",
        element: <CharactersRoot />,
        children: [
          {
            index: true,
            element: <Characters />,
            loader: characterLoader,
          },
          {
            path: ":id",
            id: "character-detail",
            // loader: eventDetailLoader,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
