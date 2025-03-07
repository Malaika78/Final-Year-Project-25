import menuModel from "../models/menuModel.js";

const addMenu = async (req, res) => {
  const { name, items } = req.body;
  const menu = new menuModel({
    name,
    items,
  });
  try {
    await menu.save();
    res.json({ success: true, message: `${name} Added in menu` });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const getMenu = async (req, res) => {
  try {
    const menu = await menuModel.find({}).populate("items");
    res.json({ success: true, data: menu });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};
const updateMenu = async (req, res) => {
  console.log(req.body); // To check what you're receiving in the body
  const { id } = req.params; // Fix the way you're accessing menuID
  const { newitems } = req.body;

  // Validation: Ensure newitems is a non-empty array
  if (!Array.isArray(newitems) || newitems.length === 0) {
    return res.status(400).json({
      success: false,
      message: "Item IDs must be an array and cannot be empty.",
    });
  }

  try {
    // Update the menu with new items using $addToSet to avoid duplicates
    const UpdatedMenu = await menuModel
      .findByIdAndUpdate(
        id,
        { $addToSet: { items: { $each: newitems } } }, // Adds multiple items at once
        { new: true }
      )
      .populate("items"); // Populate the items' details

    if (!UpdatedMenu) {
      return res
        .status(404)
        .json({ success: false, message: "Menu not found" });
    }

    res.json({ success: true, data: UpdatedMenu });
  } catch (error) {
    console.error("Error updating menu:", error);
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};
const singleMenu = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const menu = await menuModel.findById(id).populate("items");
    res.json({ success: true, data: menu });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};
const deleteMenu = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const menu = await menuModel.findByIdAndDelete(id);
    res.json({ success: true, data: "Menu Deleted " });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};

export { addMenu, getMenu, updateMenu, singleMenu, deleteMenu };
