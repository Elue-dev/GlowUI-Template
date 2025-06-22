import { ReactNode } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "destructive" | "outline";
  size?: "small" | "medium" | "large";
  style?: ViewStyle;
}

export default function DialogButton({
  children,
  variant = "primary",
  size = "medium",
  style,
}: ButtonProps) {
  const buttonStyles = [
    styles.button,
    variant === "primary" && styles.primaryButton,
    variant === "secondary" && styles.secondaryButton,
    variant === "destructive" && styles.destructiveButton,
    variant === "outline" && styles.outlineButton,
    size === "small" && styles.smallButton,
    size === "large" && styles.largeButton,
    size === "medium" && styles.mediumButton,
    style,
  ];
  const textStyles = [
    styles.buttonText,
    variant === "primary" && styles.primaryButtonText,
    variant === "secondary" && styles.secondaryButtonText,
    variant === "destructive" && styles.destructiveButtonText,
    variant === "outline" && styles.outlineButtonText,
    size === "small" && styles.smallButtonText,
    size === "large" && styles.largeButtonText,
    size === "medium" && styles.mediumButtonText,
  ];
  return (
    <View style={buttonStyles}>
      <Text style={textStyles}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: "#fafafa",
    borderColor: "#fafafa",
  },
  secondaryButton: {
    backgroundColor: "#27272a",
    borderColor: "#27272a",
  },
  destructiveButton: {
    backgroundColor: "#ef4444",
    borderColor: "#ef4444",
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderColor: "#27272a",
  },
  smallButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  largeButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  mediumButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
  },
  primaryButtonText: {
    color: "#09090b",
  },
  secondaryButtonText: {
    color: "#fafafa",
  },
  destructiveButtonText: {
    color: "#fafafa",
  },
  outlineButtonText: {
    color: "#fafafa",
  },
  smallButtonText: {
    fontSize: 12,
  },
  largeButtonText: {
    fontSize: 16,
  },
  mediumButtonText: {
    fontSize: 16,
  },
});
