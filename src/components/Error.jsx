import { useRouteError } from "react-router-dom";
import PageContent from "./layouts/PageContent";
import Nav from "./layouts/Nav";

function Error() {
  const error = useRouteError();

  let title = "An Error Occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resource or page";
  }
  return (
    <>
      <Nav />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default Error;
