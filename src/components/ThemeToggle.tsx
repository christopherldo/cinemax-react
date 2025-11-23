import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext/useTheme";

export const ThemeToggle = () => {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`
        relative w-8 h-8 rounded-xl flex justify-center items-center transition-all duration-300 bg-soft
        hover:scale-105 active:scale-95 cursor-pointer
      `}
      title={
        currentTheme === "dark"
          ? "Mudar para Light Mode"
          : "Mudar para Dark Mode"
      }
    >
      <Sun
        size={24}
        className={`
          absolute transition-all duration-500 ease-in-out
          ${
            currentTheme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-0"
          }
        `}
        color="#FF8700"
        fill="#FF8700"
      />
      <Moon
        size={24}
        className={`
          absolute transition-all duration-500 ease-in-out
          ${
            currentTheme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-90 scale-0"
          }
        `}
        color="#1F1D2B"
        fill="#1F1D2B"
      />
    </button>
  );
};
