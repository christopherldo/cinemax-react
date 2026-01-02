import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export const SplashScreen = () => {
  const navigate = useNavigate();

  const token = useAuthStore((state) => state.token);
  const isLoggedIn = token !== null;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoggedIn === false) navigate("/welcome");
    }, 2000); // 2s

    return () => clearTimeout(timer);
  }, [isLoggedIn, navigate]);

  return (
    <div className="w-dvw h-dvh bg-background flex justify-center items-center">
      <img src="https://picsum.photos/138" alt="" />
    </div>
  );
};
