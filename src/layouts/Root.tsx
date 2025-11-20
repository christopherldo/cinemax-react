import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const Root = () => {
  return (
    <main className="bg-dark min-w-dvw min-h-dvh flex flex-col">
      <Outlet />
      <NavBar />
    </main>
  );
};
