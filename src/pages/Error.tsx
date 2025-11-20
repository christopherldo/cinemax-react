import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { formatError } from "../utils/formatError";

export const ErrorPage = () => {
  const error: string | string[] = [];

  const routeError = useRouteError();
  console.log(error);

  if (isRouteErrorResponse(routeError)) {
    error.push(routeError.statusText);
  } else if (routeError instanceof Error) {
    error.push(routeError.message);
  } else if (typeof routeError === "string") {
    error.push(routeError);
  } else {
    console.error(routeError);
    error.push("Unknow error");
  }

  return (
    <div className="w-dvw flex flex-col items-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{formatError(error)}</i>
      </p>
    </div>
  );
};
