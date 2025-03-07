import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "food", // References MenuItem
      },
    ],
  },
  { timestamps: true }
);

const menuModel = mongoose.model.Menu || mongoose.model("Menu", MenuSchema);

export default menuModel;
