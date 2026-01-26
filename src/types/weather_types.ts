export interface WeatherData {
  current: {
    feelslike_c: number;
    humidity: number;
    temp_c: number;
    wind_kph: number;
  };
  location: {
    country: string;
    localtime: string;
    tz_id: string;
  };
}
export interface weatherInfo {
  icon: string;
  description: string;
}
