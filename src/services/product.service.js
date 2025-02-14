import { where } from "sequelize";
import Product from "../models/product.model.js";
import axios from "axios";
import Enum from "enum";


const getProducts = async () => {
    return await Product.find();
};

//export default { getOrders, getOrderById, findOrderStatus, updateOrderStatus };

export default { getProducts }

