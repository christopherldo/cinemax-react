import { useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useAuthStore } from "../../store/authStore";
import { supabase } from "../../lib/supabase";

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const logIn = useAuthStore((state) => state.logIn);
  const logOut = useAuthStore((state) => state.logOut);

  const handleLoginWithPassword = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("An error has occurred while logging in: ", error.message);
      throw new Error(
        `An error has occurred while logging in: ${error.message}`,
      );
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    logOut();
  };

  const handleRegisterWithPassword = async (
    email: string,
    password: string,
    displayName: string,
  ) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName,
        },
      },
    });

    if (error) {
      console.error(
        "An error has occurred while registering up: ",
        error.message,
      );
      throw new Error(
        `An error has occurred while registering up: ${error.message}`,
      );
    }
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        logIn(session.user, session.access_token);
      } else if (event === "SIGNED_OUT") {
        logOut();
      }
    });

    return () => subscription.unsubscribe();
  }, [logIn, logOut]);

  return (
    <AuthContext.Provider
      value={{
        handleLoginWithPassword,
        handleLogout,
        handleRegisterWithPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
