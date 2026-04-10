import express from "express";
import cors from "cors";
import { weatherRoutes } from "./routes/weatherRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    service: "weather-gateway-service",
    status: "running"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

app.use("/api/weather", weatherRoutes);

export { app };
