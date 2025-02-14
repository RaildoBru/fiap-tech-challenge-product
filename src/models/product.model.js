import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name : String,
        price: Number,
        description: String,
        category: {
            type: String,
            enum: ["Food", "Beverage", "Snack", "Dessert"],
        }
    },{collection: "Product"}
);
ProductSchema.set('timestamps', true);
ProductSchema.set('versionKey', false);
const Product = mongoose.model("Product", ProductSchema);

export default Product;
