import { Router } from "express";
import { createCategory, getAllCategories, getProductsByCategory } from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.post("/", createCategory);
categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:id/products", getProductsByCategory);

export default categoryRouter;
