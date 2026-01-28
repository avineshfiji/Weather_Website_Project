export function getIcon(WeatherText: string | undefined): string {
  if (WeatherText == undefined) return "help";

  switch (WeatherText) {
    case "Sunny":
      return "wb_sunny";
    case "Partly Cloudy":
      return "Cloudy";
    case "Partly cloudy":
      return "Cloudy";
    case "Overcast":
      return "cloud";
    case "Mist":
      return "foggy";
    case "Patchy rain nearby":
      return "rainy";
    case "Patchy snow nearby":
      return "weather_snowy";
    case "Patchy sleet nearby":
      return "weather_mix";
    case "Patchy freezing drizzle nearby":
      return "weather_mix";
    case "Thundery outbreaks in nearby":
      return "thunderstorm";
    case "Blowing snow":
      return "snowing";
    case "Blizzard":
      return "ac_unit";
    case "Fog":
      return "foggy";
    case "Freezing fog":
      return "foggy";
    case "Patchy light drizzle":
      return "rainy";
    case "Light drizzle":
      return "rainy";
    case "Freezing drizzle":
      return "weather_mix";
    case "Heavy freezing drizzle":
      return "weather_mix";
    case "Patchy light rain":
      return "rainy";
    case "Light rain":
      return "rainy";
    case "Moderate rain at times":
      return "rainy";
    case "Moderate rain":
      return "rainy";
    case "Heavy rain at times":
      return "rainy_heavy";
    case "Heavy rain":
      return "rainy_heavy";
    case "Light freezing rain":
      return "weather_mix";
    case "Moderate or heavy freezing rain":
      return "weather_mix";
    case "Light sleet":
      return "weather_mix";
    case "Moderate or heavy sleet":
      return "weather_mix";
    case "Patchy light snow":
      return "weather_snowy";
    case "Light snow":
      return "weather_snowy";
    case "Patchy moderate snow":
      return "weather_snowy";
    case "Moderate snow":
      return "weather_snowy";
    case "Patchy heavy snow":
      return "snowing";
    case "Heavy snow":
      return "snowing";
    case "Ice pellets":
      return "weather_hail";
    case "Light rain shower":
      return "rainy";
    case "Moderate or heavy rain shower":
      return "rainy";
    case "Torrential rain shower":
      return "rainy_heavy";
    case "Light sleet showers":
      return "weather_mix";
    case "Moderate or heavy sleet showers":
      return "weather_mix";
    case "Light snow showers":
      return "weather_snowy";
    case "Moderate or heavy snow showers":
      return "snowing";
    case "Light showers of ice pellets":
      return "weather_hail";
    case "Moderate or heavy showers of ice pellets":
      return "weather_hail";
    case "Patchy light rain in area with thunder":
      return "thunderstorm";
    case "Moderate or heavy rain in area with thunder":
      return "thunderstorm";
    case "Patchy light snow in area with thunder":
      return "thunderstorm";
    case "Moderate or heavy snow in area with thunder":
      return "thunderstorm";
  }

  return "Help";
}
