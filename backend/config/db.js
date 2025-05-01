import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ulfatsial106:DphoNiYGBSjzONrJ@cluster0.sos3m3t.mongodb.net/FinalYearProject"
    )
    .then(() => {
      console.log("DB connected");
    });
};
