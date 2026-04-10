import { fetchCurrentWeatherByCity } from "../services/weatherService.js";

export async function getCurrentWeather(req, res) {
  const city = String(req.query.city || "").trim();

  if (!city) {
    return res.status(400).json({ error: "city is required" });
  }

  try {
    const data = await fetchCurrentWeatherByCity(city);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
