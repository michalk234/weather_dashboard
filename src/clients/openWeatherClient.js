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
    city: data.name,
    temp: data.main?.temp ?? null,
    description: data.weather?.[0]?.description ?? ""
  };
}
