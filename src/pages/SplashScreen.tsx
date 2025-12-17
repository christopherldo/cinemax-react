import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SplashScreen = () => {
  const navigate = useNavigate();

  const isLoggedIn = false;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoggedIn === false) navigate("/welcome");
    }, 5000); // 5s

    return () => clearTimeout(timer);
  }, [isLoggedIn, navigate]);

  return (
    <div className="w-dvw h-dvh bg-background flex justify-center items-center">
      <img src="https://picsum.photos/138" alt="" />
    </div>
  );
};
