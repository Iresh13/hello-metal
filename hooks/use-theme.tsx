import { useContext } from "react";
import { ThemeContext } from "../providers/theme";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Wrap the hook inside ThemeProvider");

  return context;
};
