import { useEffect, useState } from "react";
import type { WeatherData } from "../types/weather_types";

const API_KEY = import.meta.env.VITE_API_KEY;
const URL = import.meta.env.VITE_URL;

export function useWeather(location: string) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  if (!API_KEY || !URL) console.log("error, missing api_key or url");
  useEffect(() => {
    if (!location) return;
    const controller = new AbortController();
    const fetchWeather = async () => {
      const MIN_LOADING_TIME = 500;
      const startTime = Date.now();
      try {
        setError(null);

        setLoading(true);
        setData(null);

        const res = await fetch(`${URL}?key=${API_KEY}&q=${location}&aqi=no`, {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const fetchData = await res.json();

        const elapsedTime = Date.now() - startTime;
        const remainingTime = MIN_LOADING_TIME - elapsedTime;

        if (remainingTime > 0) {
          await new Promise((resolve) => setTimeout(resolve, remainingTime));
        }
        setData(fetchData);
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;
        // IMPORTANT: Still wait minimum time even for errors
        // This prevents flicker on error states too
        const elapsedTime = Date.now() - startTime;
        const remainingTime = MIN_LOADING_TIME - elapsedTime;

        if (remainingTime > 0) {
          await new Promise((resolve) => setTimeout(resolve, remainingTime));
        }

        setError(
          `Failed to fetch weather: ${err instanceof Error ? err.message : "Unknown error"}`,
        );
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
    return () => {
      controller.abort();
    };
  }, [location]);
  return { data, loading, error };
}
