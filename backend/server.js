import express from "express";

import cors from "cors";

import "dotenv/config";

import { createServer } from "http";

import { connectDB } from "./config/db.js";
import cartRouter from "./routes/cartRoute.js";
import feedbackRoutes from "./routes/feedback.js";
import foodRouter from "./routes/foodRoute.js";
import MenuRouter from "./routes/menuRouter.js";
import orderRouter from "./routes/orderRoute.js";
import RestaurantRouter from "./routes/restaurantRoute.js";
import userRouter from "./routes/userRoute.js";
import { addFakeFood } from "./utils/foodSeed.js";
import { addFakeRestaurants } from "./utils/restaurantSeeder.js";
import { registerSocketServer } from "./utils/socketServer.js";

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection

const runSeeder = async () => {
  await connectDB();
  await addFakeFood();
  await addFakeRestaurants();
  // process.exit();
};

runSeeder();

// Create HTTP server for Socket.IO
const server = createServer(app);

registerSocketServer(server);

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/menu", MenuRouter);
app.use("/api/restaurant", RestaurantRouter);
app.use("/api/feedback", feedbackRoutes);
app.get("/", async (req, res) => {
  res.send("API working");
});

server.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
