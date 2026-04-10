import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: Number(process.env.PORT || 3000),
  apiKey: process.env.OPENWEATHER_API_KEY || ""
};
