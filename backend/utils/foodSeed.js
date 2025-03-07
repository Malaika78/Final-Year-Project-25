import foodModel from "../models/foodModel.js";

const foodItems = [
  {
    name: "Cheeseburger",
    description:
      "A delicious cheeseburger with a juicy beef patty, cheese, lettuce, and tomato.",
    price: 8.99,
    category: "Burgers",
    image: "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg",
  },
  {
    name: "Margherita Pizza",
    description:
      "Classic Margherita pizza topped with fresh tomatoes, mozzarella, and basil.",
    price: 12.5,
    category: "Pizza",
    image: "https://images.pexels.com/photos/4109130/pexels-photo-4109130.jpeg",
  },
  {
    name: "Caesar Salad",
    description:
      "Fresh romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
    price: 7.99,
    category: "Salads",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    name: "Spaghetti Carbonara",
    description:
      "Traditional Italian pasta with creamy sauce, pancetta, and Parmesan cheese.",
    price: 10.99,
    category: "Pasta",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
  },
  {
    name: "Grilled Chicken Sandwich",
    description:
      "Grilled chicken breast with lettuce, tomato, and mayo on a toasted bun.",
    price: 9.5,
    category: "Sandwiches",
    image: "https://images.pexels.com/photos/1600717/pexels-photo-1600717.jpeg",
  },
];

export const addFakeFood = async () => {
  try {
    const isfoods = await foodModel.find({});
    if (isfoods.length === 0) {
      const foods = await foodModel.insertMany(foodItems);
      console.log("Food items seeded:", foods);
      return { success: true, data: foods };
    } else {
      console.log("Food items already exist, skipping insertion.");
      return { success: false, message: "Food items already exist." };
    }
  } catch (error) {
    console.error("Error while adding food items:", error);
    return { success: false, message: "Error adding food items." };
  }
};
