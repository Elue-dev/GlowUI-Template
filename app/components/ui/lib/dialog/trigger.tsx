import { Pressable, StyleSheet } from "react-native";

import { useDialogStore } from "@/app/store/useDialogStore";
import React from "react";
import { DialogTriggerProps } from "./dialog.types";

export const DialogTrigger: React.FC<DialogTriggerProps> = ({
  children,
}: DialogTriggerProps): React.ReactNode & React.JSX.Element => {
  const { setOpen } = useDialogStore();
  return (
    <Pressable
      onPress={() => {
        setOpen(true);
      }}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    color: "#babababa",
    marginBottom: 16,
    bottom: 2.5,
  },
});
