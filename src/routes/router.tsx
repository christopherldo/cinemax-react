import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Root } from "../layouts/Root";
import { ErrorPage } from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
