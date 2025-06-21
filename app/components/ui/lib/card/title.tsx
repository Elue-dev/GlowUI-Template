import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";

interface TitleProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export const Title: React.FunctionComponent<TitleProps> = ({
  children,
  style,
}): React.ReactNode => {
  return (
    <Text
      className={"font-bold text-gray-100 text-2xl"}
      numberOfLines={2}
      style={style}
    >
      {children}
    </Text>
  );
};
