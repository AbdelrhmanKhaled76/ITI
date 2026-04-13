import { Router } from "express"
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/product.controller.js";
import auth from "../middlewares/authMiddleware.js";

const productRouter = Router();

productRouter.route
("/")
.get(auth, getAllProducts)
.post(createProduct);

productRouter.route
("/:id")
.get(getProduct)
.patch(updateProduct)
.delete(deleteProduct);



export default productRouter;