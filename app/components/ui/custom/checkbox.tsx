import React from "react";
import { AnimatedCheckbox } from "../lib/checkbox/checkbox";

interface CheckboxProps {
  isChecked: boolean;
  onPress: (checked: boolean) => void;
  label: string;
  activeColor?: string;
  borderColor?: string;
  checkMarkColor?: string;
}

export default function Checkbox({
  isChecked,
  onPress,
  label,
  activeColor = "#3b82f6",
  borderColor = "#3f3f46",
  checkMarkColor = "#fff",
}: CheckboxProps) {
  return (
    <AnimatedCheckbox
      checked={isChecked}
      onPress={onPress}
      label={label}
      size={20}
      borderRadius={4}
      activeColor={activeColor}
      inactiveColor="transparent"
      borderColor={borderColor}
      borderWidth={1}
      checkMarkColor={checkMarkColor}
      animationDuration={200}
      bounceEffect={true}
      labelStyle={{ color: "white" }}
      containerStyle={{ marginTop: 10 }}
    />
  );
}
