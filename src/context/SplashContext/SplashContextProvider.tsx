import { useEffect, useState } from "react";
import { SplashContext } from "./SplashContext";

interface SplashContextProviderProps {
  children: React.ReactNode;
}

export const SplashContextProvider = ({
  children,
}: SplashContextProviderProps) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SplashContext.Provider value={{ isFirstLoad }}>
      {children}
    </SplashContext.Provider>
  );
};
