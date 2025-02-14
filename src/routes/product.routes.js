import express from "express";
import ProductController from "../controllers/product.controller.js";

const router = express.Router();

router.get("/:id", ProductController.getProductById);
router.patch("/:id", ProductController.updateProduct);
router.get("/", ProductController.getProducts);
router.post("/", ProductController.createProduct);

export default router;