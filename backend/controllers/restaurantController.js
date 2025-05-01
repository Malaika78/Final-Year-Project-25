import restaurantModel from "../models/restaurantModel.js";

const addRestaurant = async (req, res) => {
  const { menuItems, name, image, description } = req.body;
  const restaurant = new restaurantModel({
    name,
    description,
    menuItems,
    image,
  });
  try {
    await restaurant.save();
    res.json({ success: true, message: "Restaurant saved successfully" });
  } catch (error) {
    res.json({ success: true, message: error });
  }
};
const getRestaurants = async (req, res) => {
  try {
    const data = await restaurantModel.find({});
    res.json({ success: true, data });
  } catch (error) {
    res.json({ success: true, message: error });
  }
};
const getsingleRestaurant = async (req, res) => {
  const { id } = req.params;
  console.log(id, "id");

  try {
    const data = await restaurantModel.findById(id).populate({
      path: "menuItems", // populate blogs
      populate: {
        path: "items",
        model: "food", // in blogs, populate comments
      },
    });
    console.log(data, "data");
    if (!data) {
      return res.json({ success: false, message: "Restaurant not found" });
    }
    res.json({ success: true, data });
  } catch (error) {
    res.json({ success: true, message: error });
  }
};

export { addRestaurant, getRestaurants, getsingleRestaurant };
