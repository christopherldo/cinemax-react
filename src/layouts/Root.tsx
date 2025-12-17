import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { SplashScreen } from "../pages/SplashScreen";
import { useSplash } from "../context/SplashContext/useSplash";

export const Root = () => {
  const { isFirstLoad } = useSplash();

  return isFirstLoad ? (
    <SplashScreen />
  ) : (
    <main className="bg-background min-w-dvw min-h-dvh flex flex-col pb-22 lg:flex-row-reverse lg:pb-0">
      <Outlet />
      <NavBar />
    </main>
  );
};
