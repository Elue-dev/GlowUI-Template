import { TextStyle, ViewStyle } from "react-native";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  style?: ViewStyle;
  variant?: "default" | "elevated" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  interactive?: boolean;
  pressable?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  animationType?: "scale" | "fade" | "slide" | "bounce" | "none";
  animationDuration?: number;
  borderRadius?: number;
  shadow?: boolean;
  shadowIntensity?: "sm" | "md" | "lg" | "xl";
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
}

interface CardHeaderProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  spacing?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right";
}

interface CardTitleProps {
  children: React.ReactNode;
  style?: TextStyle;
  size?: "sm" | "md" | "lg" | "xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  color?: string;
  numberOfLines?: number;
}

interface CardDescriptionProps {
  children: React.ReactNode;
  style?: TextStyle;
  size?: "xs" | "sm" | "md";
  color?: string;
  numberOfLines?: number;
}

interface CardContentProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  spacing?: "sm" | "md" | "lg";
}

interface CardFooterProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  spacing?: "sm" | "md" | "lg";
  justify?: "start" | "center" | "end" | "between" | "around";
}
