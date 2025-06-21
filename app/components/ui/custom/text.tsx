import React, { ReactNode } from "react";
import { Text as RNText, TextStyle } from "react-native";

interface TextProps {
  children: ReactNode;
  style?: TextStyle;
  classNames?: string;
  large?: boolean;
  centered?: boolean;
}

export default function Text({
  children,
  style,
  classNames,
  large = false,
  centered = false,
}: TextProps) {
  return (
    <RNText
      style={{
        fontSize: large ? 22 : 16,
        color: "#fff",
        textAlign: centered ? "center" : "left",
        ...style,
      }}
      className={classNames}
    >
      {children}
    </RNText>
  );
}
