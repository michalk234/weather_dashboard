import { fetchWeather } from "../clients/openWeatherClient.js";

export async function fetchCurrentWeatherByCity(city) {
  return fetchWeather(city);
}
