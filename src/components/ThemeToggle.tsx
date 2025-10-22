"use client";
import { Moon, Sun } from "lucide-react";
import useDarkMode from "../hooks/useDarkMode";

export default function ThemeToggle() {
  const { theme, setTheme } = useDarkMode();

  // const toggleMode = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded bg-gray-200 dark:bg-gray-800 p-2 transition text-gray-700 dark:text-yellow-400"
      title="Toggle Theme"
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
 