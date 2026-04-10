import { env } from "../config/env.js";

export async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${env.apiKey}`;

  const response = await fetch(url);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenWeather API error: ${response.status} ${errorText}`);
  }

  const data = await response.json();

  return {
    location: {
      city: data.name,
      country: data.sys?.country ?? "",
      lat: data.coord?.lat ?? null,
      lon: data.coord?.lon ?? null
    },
    current: {
      temperature: data.main?.temp ?? null,
      feelsLike: data.main?.feels_like ?? null,
      humidity: data.main?.humidity ?? null,
      windSpeed: data.wind?.speed ?? null,
      pressure: data.main?.pressure ?? null,
      description: data.weather?.[0]?.description ?? ""
    }
  };
}
