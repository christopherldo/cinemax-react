import { createContext } from "react";
import type { Theme } from "../../types/Theme";

interface ThemeContextProps {
  currentTheme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);
