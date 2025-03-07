import express from "express";
import {
  addRestaurant,
  getRestaurants,
  getsingleRestaurant,
} from "../controllers/restaurantController.js";

const RestaurantRouter = express.Router();

RestaurantRouter.post("/add-restaurant", addRestaurant);
RestaurantRouter.get("/", getRestaurants);
RestaurantRouter.get("/:id", getsingleRestaurant);

export default RestaurantRouter;
