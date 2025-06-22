import { Feather } from "@expo/vector-icons";
import type { StyleProp, ViewStyle } from "react-native";

export interface ChipItem {
  label: string;
  icon: keyof typeof Feather.glyphMap;
  activeIcon?: keyof typeof Feather.glyphMap;
  activeColor?: string;
  activeTextColor?: string;
}

export interface ChipGroupProps<T> {
  chips: T[];
  selectedIndex?: number;
  onChange?: (index: number) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

export interface AnimatedChipProps extends ChipItem {
  isActive: boolean;
  onPress: () => void;
}
