import { create } from "zustand";

type State = {
  priceIsActive: boolean;
};

type Action = {
  toggleIsActive: (priceIsActive: boolean) => void;
};

export const usePriceIsActive = create<State & Action>((set) => ({
  priceIsActive: false,
  toggleIsActive: (priceIsActive: boolean) =>
    set({ priceIsActive: priceIsActive }),
}));
