import { View } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { layoutStyle } from "../../styles/layout";
import { useTheme } from "../../hooks/use-theme";

const Layout = ({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: Record<string, string | number>;
}) => {
  const { selectedTheme } = useTheme();

  return (
    <SafeAreaView style={[layoutStyle.layout, selectedTheme.default, styles]}>
      {children}
    </SafeAreaView>
  );
};

export default Layout;
