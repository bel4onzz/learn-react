import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";

import Characters, { loader as charactersLoader } from "./pages/Characters";
import Character, { loader as characterLoader } from "./pages/Character";
import Favorites from "./pages/Favorites";

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
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "characters",
        element: <Characters />,
        loader: charactersLoader,
      },
      {
        path: "characters/:id",
        element: <Character />,
        loader: characterLoader,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
