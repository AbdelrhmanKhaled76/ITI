import { Router } from "express"
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.get("/" , getAllProducts);

productRouter.get("/:id", getProduct);

productRouter.post("/", createProduct);

productRouter.patch("/:id", updateProduct);

productRouter.delete("/:id", deleteProduct);


export default productRouter;