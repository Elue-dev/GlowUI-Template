import { Feather } from "@expo/vector-icons";
import { TextStyle, ViewStyle } from "react-native";

export interface ExpandableButtonProps {
  title: string;
  isLoading: boolean;
  onPress: () => void;
  width?: number;
  height?: number;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: number;
  icon?: keyof typeof Feather.glyphMap;
  iconSize?: number;
  iconColor?: string;
  borderRadius?: number;
  gradientColors?: string[];
  style?: ViewStyle;
  textStyle?: TextStyle;
  withPressAnimation?: boolean;
  loadingComponent?: React.ReactNode;
  loadingIndicatorColor?: string;
  animationConfig?: {
    damping?: number;
    stiffness?: number;
    duration?: number;
  };
  disabled?: boolean;
  noAmimation?: boolean;
}
