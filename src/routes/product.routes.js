import express from "express";
//import { createOrder, getOrders, getOrderById, updateOrderStatus, findStatus } from "../controllers/order.controller.js";

import { getProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProduct);


//router.get("/status", findStatus);
//router.post("/", createOrder);
//router.get("/", getProducts);
//router.get("/:id", getOrderById);
//router.put("/:id/status", updateOrderStatus);

export default router;

