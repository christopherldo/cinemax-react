import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Root } from "../layouts/Root";
import { ErrorPage } from "../pages/ErrorPage";
import { MoviePage } from "../pages/MoviePage";
import { WelcomePage } from "../pages/WelcomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { WishlistPage } from "../pages/WishlistPage";
import { AuthGuard } from "../components/AuthGuard";

export const router = createBrowserRouter([
  {
    path: "/welcome",
    element: <WelcomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    element: <AuthGuard />,
    children: [
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
          {
            path: "/wishlist",
            element: <WishlistPage />,
          },
        ],
      },
    ],
  },
]);
