import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { STORAGE } from "../constants/storage";
import { darkTheme, lightTheme } from "../styles/theme";

type ThemeContextType = {
  toggle: () => void;
  selectedTheme: typeof darkTheme | typeof lightTheme;
  isDarkState: boolean;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useColorScheme();
  const isDark = theme === "dark";
  const [isDarkState, setIsDarkState] = useState<boolean>(isDark);

  const toggle = () => {
    const dark = !isDarkState;
    setIsDarkState(dark);

    AsyncStorage.setItem(STORAGE.theme, dark ? "dark" : "light");
  };

  useEffect(() => {
    AsyncStorage.getItem(STORAGE.theme).then((val) => {
      if (val) {
        setIsDarkState(val === "dark");
      }
    });
  }, []);

  const selectedTheme = isDarkState ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{
        selectedTheme,
        toggle,
        isDarkState,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
