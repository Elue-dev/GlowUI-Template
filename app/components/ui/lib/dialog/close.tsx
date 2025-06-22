import { Pressable } from "react-native";

import { useDialogStore } from "@/app/store/useDialogStore";
import { JSX, ReactNode } from "react";

export const DialogClose = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const { setOpen } = useDialogStore();
  return <Pressable onPress={() => setOpen(false)}>{children}</Pressable>;
};
