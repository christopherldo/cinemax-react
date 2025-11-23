import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const Root = () => {
  return (
    <main className="bg-background min-w-dvw min-h-dvh flex flex-col pb-22">
      <Outlet />
      <NavBar />
    </main>
  );
};
