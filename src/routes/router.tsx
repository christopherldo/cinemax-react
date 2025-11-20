import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Root } from "../layouts/Root";
import { ErrorPage } from "../pages/ErrorPage";
import { MoviePage } from "../pages/MoviePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie/:movieId",
        element: <MoviePage />,
      },
    ],
  },
]);
