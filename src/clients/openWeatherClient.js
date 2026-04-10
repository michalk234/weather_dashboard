import { env } from "../config/env.js";

export async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${env.apiKey}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("API error");

  const data = await res.json();

  return {
    city: data.name,
    temp: data.main.temp,
    description: data.weather[0].description
  };
}
