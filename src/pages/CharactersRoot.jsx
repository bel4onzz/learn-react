import { Outlet } from "react-router-dom";
import Navigation from "../layouts/Navigation";

const CharactersRoot = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default CharactersRoot;
