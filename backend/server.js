import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { addFakeFood } from "./utils/foodSeed.js";
import MenuRouter from "./routes/menuRouter.js";
import RestaurantRouter from "./routes/restaurantRoute.js";
import { createServer } from "http";
import { registerSocketServer } from "./utils/socketServer.js";

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

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

app.get("/", async (req, res) => {
  res.send("API working");
});

addFakeFood();

server.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
