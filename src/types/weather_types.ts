export interface WeatherData {
  current?: {
    feelslike_c: number;
    humidity: number;
    temp_c: number;
    wind_kph: number;
  };
  location?: {
    country: string;
    localtime: string;
    tz_id: string;
  };
}
export interface LocationState {
  location: string;
  updateLocation: (newLocation: string) => void;
  clearLocation: () => void;
}
export interface ForcastDays {
  Days: number;
  updateDays: (newDays: number) => void;
}
export interface WeatherDs {
  data: {
    current: {
      temp_c: number;
      temp_f: number;
      wind_mph: number;
      wind_kph: number;
      wind_dir: string;
      humidity: number;
      feelslike_c: number;
      feelslike_f: number;
      uv: number;
      condition: {
        text: string;
      };
    };

    location: {
      name: string;
      country: string;
    };
    forecast: {
      forecastday: Array<{
        date: string;
        day: {
          maxtemp_c: number;
          maxtemp_f: number;
          mintemp_c: number;
          mintemp_f: number;
          avgtemp_c: number;
          avgtemp_f: number;
          maxwind_mph: number;
          maxwind_kph: number;
          totalprecip_mm: number;
          totalprecip_in: number;
          totalsnow_cm: number;
          avgvis_km: number;
          avgvis_miles: number;
          avghumidity: number;
          uv: number;
          condition: {
            text: string;
          };
        };
        astro: {
          sunrise: string;
          sunset: string;
          moonrise: string;
          moonset: string;
          moon_phase: string;
        };
      }>;
    };
  } | null;
  loading: boolean;
  error: string | null;
  setData: (
    newData: {
      current: {
        temp_c: number;
        temp_f: number;
        wind_mph: number;
        wind_kph: number;
        wind_dir: string;
        humidity: number;
        feelslike_c: number;
        feelslike_f: number;
        uv: number;
        condition: {
          text: string;
        };
      };

      location: {
        name: string;
        country: string;
      };
      forecast: {
        forecastday: Array<{
          date: string;
          day: {
            maxtemp_c: number;
            maxtemp_f: number;
            mintemp_c: number;
            mintemp_f: number;
            avgtemp_c: number;
            avgtemp_f: number;
            maxwind_mph: number;
            maxwind_kph: number;
            totalprecip_mm: number;
            totalprecip_in: number;
            totalsnow_cm: number;
            avgvis_km: number;
            avgvis_miles: number;
            avghumidity: number;
            uv: number;
            condition: {
              text: string;
            };
          };
          astro: {
            sunrise: string;
            sunset: string;
            moonrise: string;
            moonset: string;
            moon_phase: string;
          };
        }>;
      };
    } | null,
  ) => void;
  setLoading: (load: boolean) => void;
  setError: (errorMsg: string | null) => void;
}

export interface UnitStore {
  Unit: "C" | "F";
  setUnit: (newUnit: "C" | "F") => void;
}
export interface WeatherUnitStore {
  windUnit: "km/h" | "mph" | "m/s" | "knots";
  setWindUnit: (newWindUnit: "km/h" | "mph" | "m/s" | "knots") => void;
}
