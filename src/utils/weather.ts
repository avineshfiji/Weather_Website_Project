import type { weatherInfo } from "../types/weather_types";

const TEMP_THRESHOLDS = {
  FREEZING: 0,
  COLD: 10,
  MILD: 20,
  WARM: 25,
  HOT: 30,
  VERY_HOT: 35,
} as const;

export function getWeatherDescription(temp: number | undefined): weatherInfo {
  if (temp === undefined) {
    return { icon: "Unknown", description: "Unknown" };
  }
  if (temp <= TEMP_THRESHOLDS.FREEZING)
    return { description: "Freezing", icon: "severe_cold" };
  if (temp <= TEMP_THRESHOLDS.COLD)
    return { description: "Cold", icon: "mode_cool" };
  if (temp <= TEMP_THRESHOLDS.MILD)
    return { description: "Cool/Mild", icon: "mode_cool" };
  if (temp <= TEMP_THRESHOLDS.WARM)
    return { description: "Warm/Comfortable", icon: "clear_day" };
  if (temp <= TEMP_THRESHOLDS.HOT)
    return { description: "Warm/Hot", icon: "emergency_heat" };
  if (temp <= TEMP_THRESHOLDS.VERY_HOT)
    return { description: "Hot", icon: "emergency_heat" };
  else {
    return { description: "Very Hot/Blazing", icon: "emergency_heat" };
  }
}
