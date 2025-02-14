import mongoose  from "mongoose";

const ProductSchema = new mongoose.Schema(
    {


    }, { collection: 'Product' }
);

const Product = mongoose.model("Product", ProductSchema);


export default Product;
