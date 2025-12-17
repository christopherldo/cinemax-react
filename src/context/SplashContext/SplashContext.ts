import { createContext } from "react";

interface SplashContextProps {
  isFirstLoad: boolean;
}

export const SplashContext = createContext<SplashContextProps | null>(null);
