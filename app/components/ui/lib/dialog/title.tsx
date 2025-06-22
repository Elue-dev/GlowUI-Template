import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { DialogTitleProps } from "./dialog.types";

export const DialogTitle: React.FC<DialogTitleProps> = ({
  children,
  style,
}: DialogTitleProps): React.ReactNode & React.JSX.Element => {
  return (
    <View>
      <Text style={[styles.title, style]} numberOfLines={2}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
