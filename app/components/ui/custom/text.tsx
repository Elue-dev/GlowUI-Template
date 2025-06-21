import React, { ReactNode } from "react";
import { Text as RNText, TextStyle } from "react-native";

interface TextProps {
  children: ReactNode;
  style?: TextStyle;
}

export default function Text({ children, style }: TextProps) {
  return (
    <RNText style={{ fontSize: 16, color: "#fff", ...style }}>
      {children}
    </RNText>
  );
}
