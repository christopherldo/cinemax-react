import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";

export const AuthGuard = () => {
  const navigate = useNavigate();
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (!token) {
      navigate("/welcome", { replace: true });
    }
  }, [token, navigate]);

  if (!token) return null;

  return <Outlet />;
};
