import { create } from "zustand";

type State = {
  featuresIsActive: boolean;
};

type Action = {
  toggleIsActive: (featuresIsActive: boolean) => void;
};

export const useFeaturesIsActive = create<State & Action>((set) => ({
  featuresIsActive: false,
  toggleIsActive: (featuresIsActive: boolean) =>
    set({ featuresIsActive: featuresIsActive }),
}));
