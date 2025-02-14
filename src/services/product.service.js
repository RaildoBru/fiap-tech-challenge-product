import { where } from "sequelize";
import Product from "../models/product.model.js";
import axios from "axios";
import Enum from "enum";

const getProducts = async () => {
    return await Product.find();
};

const findByIdProduct = async (id) => {
    return await Product.findById(id);
};

const createProduct = async(params) => {
    const values = {
        name: params.name,
        price: params.price,
        description: params.description,
        category: params.category
    }
    return await Product.create(params);
}

const updateProduct = async(id,params) => {
        const paramUpdate = { 
            name: params.name,
            price: params.price,
            description: params.description,
            category: params.category
        };
    return await Product.findByIdAndUpdate(id, paramUpdate, { new: true});
};

export default { getProducts, findByIdProduct, updateProduct, createProduct }
