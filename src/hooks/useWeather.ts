import { useEffect } from "react";
import { useWDetails } from "../store/weatherStore.ts";
import { useForcastDays } from "../store/weatherStore.ts";

const API_KEY = import.meta.env.VITE_API_KEY;
const URL = import.meta.env.VITE_7_DAY_URL;

export function useWeather(location: string) {
  const Days = useForcastDays((state) => state.Days);
  const setData = useWDetails((state) => state.setData);
  const setLoading = useWDetails((state) => state.setLoading);
  const setError = useWDetails((state) => state.setError);

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

        const res = await fetch(
          `${URL}?key=${API_KEY}&q=${location}&days=${Days}&aqi=no&alerts=no`,
          {
            signal: controller.signal,
          },
        );
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const fetchData = await res.json();

        const elapsedTime = Date.now() - startTime;
        const remainingTime = MIN_LOADING_TIME - elapsedTime;

        if (remainingTime > 0) {
          await new Promise((resolve) => setTimeout(resolve, remainingTime));
        }
        console.log(fetchData);
        setData(fetchData);
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;

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
  }, [location, setData, setError, setLoading, Days]);
}
