import express from "express";
import { weatherRoutes } from "./routes/weatherRoutes.js";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/weather", weatherRoutes);

export { app };
