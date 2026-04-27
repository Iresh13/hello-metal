import { Text as RNText } from "react-native";
import { textStyle } from "../styles/text";
import { useTheme } from "../hooks/use-theme";

interface TextProps {
  title: string;
  size?: "sm" | "md" | "lg";
  styles?: Record<string, string | number>;
}

export const Text = ({ title, styles, size = "md" }: TextProps) => {
  const { selectedTheme } = useTheme();

  return (
    <RNText style={[textStyle[size], selectedTheme.text, styles]}>
      {title}
    </RNText>
  );
};
