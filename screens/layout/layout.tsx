import { View } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { layoutStyle } from "../../styles/layout";

const Layout = ({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: Record<string, string | number>;
}) => {
  return (
    <SafeAreaView style={[layoutStyle.layout, styles]}>{children}</SafeAreaView>
  );
};

export default Layout;
