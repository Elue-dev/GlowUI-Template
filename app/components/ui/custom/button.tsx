import { Feather } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import { ExpandableButton } from "../lib/button/button";

interface ButtonProps {
  title?: string;
  isLoading: boolean;
  backgroundColor?: string;
  onPress: VoidFunction;
  gradientColors?: string[];
  height?: number;
  icon?: keyof typeof Feather.glyphMap;
  disabled?: boolean;
  noAmination?: boolean;
}

export default function Button({
  title = "Proceed",
  isLoading,
  backgroundColor = "#6366f1",
  onPress,
  gradientColors,
  height = 56,
  icon,
  disabled = false,
  noAmination = false,
}: ButtonProps) {
  const width = useWindowDimensions().width;

  return (
    <ExpandableButton
      title={title}
      isLoading={isLoading}
      onPress={onPress}
      width={width - 30}
      backgroundColor={backgroundColor}
      height={height}
      {...(gradientColors && { gradientColors })}
      textColor="#ffffff"
      fontSize={17}
      icon={icon}
      iconSize={20}
      iconColor="#ffffff"
      borderRadius={28}
      withPressAnimation={true}
      noAmimation={noAmination}
      loadingIndicatorColor="#ffffff"
      animationConfig={{
        damping: 20,
        stiffness: 200,
        duration: 250,
      }}
      disabled={disabled}
      style={{ marginBottom: 10 }}
    />
  );
}
