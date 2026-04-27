import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "./text";
import { buttonStyles } from "../styles/button";

interface ButtonProps {
  title: string;
  variant?: "bordered" | "primary" | "default";
  onPress: () => void;
  styles?: Record<string, string | number>;
}

const Button = ({
  title,
  onPress,
  styles,
  variant = "default",
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyles[variant], styles]}>
      <Text
        title={title}
        styles={{
          color: variant === "bordered" ? "#4ade80" : "#000000",
        }}
      ></Text>
    </TouchableOpacity>
  );
};

export default Button;
