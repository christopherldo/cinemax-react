import { createContext } from "react";

interface AuthContextProps {
  handleLoginWithPassword: (email: string, password: string) => Promise<void>;
  handleLogout: () => Promise<void>;
  handleRegisterWithPassword: (
    email: string,
    password: string,
    displayName: string,
  ) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
