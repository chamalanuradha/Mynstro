import { Router } from "express";
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/productcontroller.js";
import auth from "../middleware/auth.js";

const productRouter = Router();

productRouter.post("/create", auth, createProduct); 
productRouter.get("/all", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.put("/update/:id", auth, updateProduct);
productRouter.delete("/delete/:id", auth, deleteProduct);

export default productRouter;
