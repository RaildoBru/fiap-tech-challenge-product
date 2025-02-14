import express from "express";
import { createProduct, getProduct, getProductById, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/:id", getProductById);
router.put("/:id/update", updateProduct);
router.get("/", getProduct);
router.post("/",createProduct);

export default router;

