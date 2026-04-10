import { Router } from "express";
import { getCurrentWeather } from "../controllers/weatherController.js";

const weatherRoutes = Router();

weatherRoutes.get("/current", getCurrentWeather);

export { weatherRoutes };
