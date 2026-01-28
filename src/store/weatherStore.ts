import { create } from "zustand";
import type {
  LocationState,
  ForcastDays,
  WeatherDs,
  UnitStore,
  WeatherUnitStore,
} from "../types/weather_types";

const initialState = {
  location: "",
};

// Store for Location
export const useLocation = create<LocationState>()((set) => ({
  ...initialState,
  updateLocation: (newLocation) => set({ location: newLocation }),
  clearLocation: () => set(initialState),
}));

// Store for getting Forcast Data for N Days
export const useForcastDays = create<ForcastDays>()((set) => ({
  Days: 3,
  updateDays: (newDays) => set({ Days: newDays }),
}));

// Store to keep Data, Loading, Error
export const useWDetails = create<WeatherDs>()((set) => ({
  data: null,
  loading: false,
  error: "",
  setData: (newData) => set({ data: newData }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error: error }),
}));

// Store for keep Tempreature Units ( F, C )
export const useUnit = create<UnitStore>()((set) => ({
  Unit: "C",
  setUnit: (newUnit) => set({ Unit: newUnit }),
}));

// Store for keep Windspeed Units ( km/h , mph, m/s, knots )
export const useWindUnit = create<WeatherUnitStore>()((set) => ({
  windUnit: "km/h",
  setWindUnit: (newWindUnit) => set({ windUnit: newWindUnit }),
}));
