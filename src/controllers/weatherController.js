import { fetchCurrentWeatherByCity } from "../services/weatherService.js";

export async function getCurrentWeather(req, res) {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: "city is required" });
  }

  try {
    const data = await fetchCurrentWeatherByCity(city);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
