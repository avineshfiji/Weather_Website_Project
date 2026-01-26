import { create } from "zustand";
import type { LocationState } from "../types/weather_types";

const initialState = {
  location: "Fiji",
};

export const useLocation = create<LocationState>()((set) => ({
  ...initialState,
  updateLocation: (newLocation) => set({ location: newLocation }),
  clearLocation: () => set(initialState),
}));

// const clearLocation = useLocation((state) => state.clearLocation);
