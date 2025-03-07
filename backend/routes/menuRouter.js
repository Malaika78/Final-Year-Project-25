import express from "express";
import {
  addMenu,
  deleteMenu,
  getMenu,
  singleMenu,
  updateMenu,
} from "../controllers/menuController.js";

const MenuRouter = express.Router();

MenuRouter.post("/", addMenu);
MenuRouter.get("/listmenu", getMenu);
MenuRouter.get("/:id", singleMenu);
MenuRouter.delete("/delete/:id", deleteMenu);
MenuRouter.put("/update/:id", updateMenu);

export default MenuRouter;
