import { create } from "zustand";

type State = {
  homeIsActive: boolean;
};

type Action = {
  toggleIsActive: (newHomeIsActive: boolean) => void;
};

export const useHomeIsActive = create<State & Action>((set) => ({
  homeIsActive: false,
  toggleIsActive: (newHomeIsActive: boolean) =>
    set({ homeIsActive: newHomeIsActive }),
}));
