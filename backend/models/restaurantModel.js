import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    menuItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu", // References Menu
      },
    ],
  },
  { timestamps: true }
);

const restaurantModel =
  mongoose.Model.restaurant || mongoose.model("restaurant", RestaurantSchema);

export default restaurantModel;
