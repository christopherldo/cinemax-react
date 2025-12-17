import { useContext } from "react";
import { SplashContext } from "./SplashContext";

export const useSplash = () => {
  const context = useContext(SplashContext);

  if (!context) {
    throw new Error("useSplash must be used within a SplashContextProvider");
  }

  return context;
};
