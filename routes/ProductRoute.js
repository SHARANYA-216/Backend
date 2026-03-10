import { getProducts,addProductForm,addProduct,editProductForm,updateProduct,deleteProduct,saveProduct } from "../controllers/productController.js";
import express from "express";
const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.get("/add", addProductForm);
productRouter.post("/add", addProduct);
productRouter.get("/:id/edit", editProductForm);
productRouter.post("/:id/edit", updateProduct);
productRouter.get("/:id/delete", deleteProduct);
productRouter.post("/:id/edit", saveProduct);

export { productRouter };
export default productRouter;