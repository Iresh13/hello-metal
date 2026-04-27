import { NavigationContainer } from "@react-navigation/native";
import { ReactNode } from "react";

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};
