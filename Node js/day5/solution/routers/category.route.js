import { Router } from "express";
import { createCategory, getAllCategories, getProductsByCategory } from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.route('/')
.post(createCategory)
.get(getAllCategories);
categoryRouter.route
("/:id/products")
.get(getProductsByCategory);

export default categoryRouter;
