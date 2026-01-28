import { getIcon } from "../utils/getIcon.ts";
import { useWDetails, useUnit } from "../store/weatherStore.ts";

import Spinner from "./spiner.tsx";

export default function Forcast() {
  const data = useWDetails((state) => state.data);
  const loading = useWDetails((state) => state.loading);
  const Unit = useUnit((state) => state.Unit);

  const Cel = "℃";
  const Feh = "℉";

  if (loading)
    return (
      <div
        className="w-screen h-screen bg-blue-900 flex items-center justify-center"
        style={{ fontSize: "8rem" }}
      >
        <Spinner />
      </div>
    );
  console.log(data);

  return (
    <div className="w-full">
      <h3 className="text-white/60 text-sm font-bold uppercase tracking-widest text-center mb-8 flex justify-center">
        3-Day Forecast
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {data?.forecast?.forecastday?.map((day) => (
          <div
            key={day.date}
            className="glass-effect rounded-xl p-6 flex flex-col items-center gap-3 transition-transform hover:scale-105 cursor-default"
          >
            <span className="text-white/60 text-sm font-semibold uppercase">
              {day.date}
            </span>
            <span className="material-symbols-outlined text-3xl text-yellow-400">
              {getIcon(day.day.condition.text.trim())}
            </span>
            <div
              className="flex flex-col items-cente h-20 glass-effect rounded-xl text-center "
              style={{ width: "90%" }}
            >
              <span className="text-lg font-bold text-white/80 mt-2 mb-2">
                Highest: {Unit == "C" ? day.day.maxtemp_c : day.day.maxtemp_f}
                <span className="ml-1">{Unit == "C" ? Cel : Feh}</span>
              </span>
              <span className="text-white/40 text-xs font-medium">
                Lowest: {Unit == "C" ? day.day.mintemp_c : day.day.mintemp_f}
                <span className="ml-1">{Unit == "C" ? Cel : Feh}</span>
              </span>
            </div>
            <div
              className="flex flex-col items-cente h-20 glass-effect rounded-xl text-center "
              style={{ width: "90%" }}
            >
              <span className="text-xs text-white/80 mt-4 mb-2">
                Average Humidity: {day.day.avghumidity} %
              </span>
              <span className="text-xs text-white/80 mt-2 mb-2">
                Average Visabilty: {day.day.avgvis_km} m
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
