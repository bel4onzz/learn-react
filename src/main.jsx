import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <Provider store={store.counterStore}>
    <StrictMode>
      <App />
    </StrictMode>
  // </Provider>
);
