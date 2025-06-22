import { create } from "zustand";

type DialogState = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const useDialogStore = create<DialogState>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
}));
