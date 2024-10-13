import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./pages/Home";
import Countries, { loader as countriesLoader } from "./pages/Countries";
import Country, { loader as countryLoader } from "./pages/Country";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "countries",
        element: <Countries />,
        loader: countriesLoader,
      },
      {
        path: "countries/:name",
        element: <Country />,
        loader: countryLoader,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
