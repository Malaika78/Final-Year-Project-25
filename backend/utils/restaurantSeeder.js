import mongoose from "mongoose";

import foodModel from "../models/foodModel.js";
import menuModel from "../models/menuModel.js";
import restaurantModel from "../models/restaurantModel.js";

const restaurantData = [
  {
    name: "Urban Bites",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "The Hungry Hippo",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "Tandoori Flame",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "Basil & Thyme",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "The Burger Joint",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "Pasta Paradise",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "Pizza Planet",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "Sushi World",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "The Curry House",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "Taco Town",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "The Green Bowl",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "Grill Master",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "Spice Route",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "Hearty Harvest",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "Ocean Bites",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "Noodle Nook",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "The Daily Dish",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "Wrap & Roll",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "Midnight Munchies",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
  {
    name: "Taste Haven",
    image:
      "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?ga=GA1.1.360825293.1743972570&semt=ais_hybrid&w=740",
  },
];

const generateRestaurants = async (foods) => {
  const restaurantList = [];

  for (let { name, image } of restaurantData) {
    const itemCount = Math.floor(Math.random() * 3) + 2;

    const selectedFoods = [];
    while (selectedFoods.length < itemCount) {
      const randomFood = foods[Math.floor(Math.random() * foods.length)];
      if (!selectedFoods.includes(randomFood._id)) {
        selectedFoods.push(randomFood._id);
      }
    }

    // Create a menu for this restaurant
    const menu = await menuModel.create({
      name: `${name} Menu`,
      items: selectedFoods,
    });

    restaurantList.push({
      name,
      image,
      description: `Welcome to ${name}, serving delicious dishes every day.`,
      menuItems: [menu._id], // ✅ now assigning menu ID(s)
    });
  }

  return restaurantList;
};

export const addFakeRestaurants = async () => {
  try {
    const existing = await restaurantModel.find({});
    if (existing.length > 0) {
      console.log("Restaurants already exist, skipping insertion.");
      return { success: false, message: "Restaurants already exist." };
    }

    const foods = await foodModel.find({});
    if (foods.length === 0) {
      console.error("No food items found. Please seed food first.");
      return { success: false, message: "No food items found." };
    }

    const restaurants = await generateRestaurants(foods);
    const inserted = await restaurantModel.insertMany(restaurants);
    console.log(`✅ Seeded ${inserted.length} restaurants with menu.`);
    return { success: true, data: inserted };
  } catch (error) {
    console.error("❌ Error while adding restaurants:", error);
    return { success: false, message: "Error adding restaurants." };
  }
};
