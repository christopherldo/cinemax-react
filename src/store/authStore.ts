import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

interface State {
  user: unknown | null;
  token: string | null;
}

interface Actions {
  logIn: (user: unknown, token: string) => void;
  logOut: () => void;
}

export const useAuthStore = create<State & Actions>()(
  persist(
    immer((set) => ({
      user: null,
      token: null,
      logIn(user, token) {
        set((state) => {
          state.user = user;
          state.token = token;
        });
      },
      logOut() {
        set((state) => {
          state.user = null;
          state.token = null;
        });
      },
    })),
    {
      name: "auth-storage",
    }
  )
);
