import express from "express";
//import { createOrder, getOrders, getOrderById, updateOrderStatus, findStatus } from "../controllers/order.controller.js";

import { createProduct, getProduct, getProductById, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/:id", getProductById);
router.put("/:id/update", updateProduct);
router.get("/", getProduct);
router.post("/",createProduct);

//router.get("/status", findStatus);
//router.post("/", createOrder);
//router.get("/", getProducts);
//router.get("/:id", getOrderById);
//router.put("/:id/update", updateOrderStatus);

export default router;

