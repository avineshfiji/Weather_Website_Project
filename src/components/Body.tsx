import { useState } from "react";
import { getWeatherDescription } from "../utils/weather.ts";
import { useWeather } from "../hooks/useWeather.ts";
import type { weatherInfo } from "../types/weather_types";
import { useLocation } from "../store/weatherStore.ts";
import Spinner from "./spiner.tsx";

export default function Body() {
  // const [location, setLocation] = useState("Fiji");
  const location = useLocation((state) => state.location);
  const updateLocation = useLocation((state) => state.updateLocation);
  // const clearLocation = useLocation((state) => state.clearLocation);

  const { data, loading, error } = useWeather(location);
  const [searchQuery, setSearchQuery] = useState("");
  const { description, icon }: weatherInfo = getWeatherDescription(
    data?.current.temp_c,
  );
  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }
  function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (searchQuery.trim() == "") return;
    updateLocation(searchQuery);
  }
  if (loading)
    return (
      <div
        className="w-screen h-screen bg-blue-900 flex items-center justify-center"
        style={{ fontSize: "8rem" }}
      >
        <Spinner />
      </div>
    );
  if (error)
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <span className="material-symbols-outlined text-red-500 text-6xl">
          error
        </span>
        <p className="text-white text-xl">Unable to load weather data</p>
        <button
          onClick={() => {
            setTimeout(() => updateLocation("Fiji"), 0);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Try Again
        </button>
      </div>
    );
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 max-w-300 mx-auto w-full">
      <div className="w-full max-w-150 mb-12">
        <div className="px-4 py-3">
          <form onSubmit={(event) => handleSearchSubmit(event)}>
            <label className="flex flex-col min-w-40 h-14 w-full bg-gray-900 rounded-md border-gray-500 border-2">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full glass-effect">
                <div className="text-[#9da6b9] flex border-none items-center justify-center pl-4 rounded-l-xl border-r-0">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none h-full placeholder:text-[#9da6b9] px-4 rounded-l-none border-l-0 pl-2 text-lg font-normal leading-normal"
                  placeholder="Search city (e.g. London, Tokyo...)"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e)}
                />
                <button className="material-symbols-outlined fill-white text-white mr-5 cursor-pointer">
                  search
                </button>
              </div>
            </label>
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center text-center space-y-4 mb-20">
        <div className="flex flex-col items-center">
          <h1 className="text-white tracking-light text-[40px] font-bold leading-tight px-4">
            {data?.location.country}
          </h1>
          <div className="flex items-center gap-4 mt-2">
            <span
              className="material-symbols-outlined mt-2 text-yellow-400"
              style={{ fontSize: "4rem" }}
            >
              {icon}
            </span>
            <h1 className="text-white tracking-tight text-[84px] font-bold leading-none">
              {data?.current.temp_c}°
              <span className="ml-1" style={{ fontSize: "60px" }}>
                C
              </span>
            </h1>
          </div>
          <p className="text-white/80 text-xl font-medium leading-normal pt-4 px-4">
            {description}
          </p>
          <div className="flex">
            <div className="mt-4 mr-4 px-4 py-2 rounded-full bg-[#2b6cee]/20 border border-[#2b6cee]/30 text-[#2b6cee] text-sm font-medium">
              Feels-like {data?.current.feelslike_c}℃
            </div>
            <div className="mt-4 mr-4 px-4 py-2 rounded-full bg-[#2b6cee]/20 border border-[#2b6cee]/30 text-[#2b6cee] text-sm font-medium">
              humidity {data?.current.humidity}%
            </div>
            <div className="mt-4 mr-4 px-4 py-2 rounded-full bg-[#2b6cee]/20 border border-[#2b6cee]/30 text-[#2b6cee] text-sm font-medium">
              humidity {data?.current.wind_kph}Km/Hr
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
