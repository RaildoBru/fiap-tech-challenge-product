import Product from "../models/product.model.js";

const ProductService = {
    getProducts: async () => {
        return await Product.find();
    },

    findByIdProduct: async (id) => {
        return await Product.findById(id);
    },

    createProduct: async(params) => {
        const values = {
            name: params.name,
            price: params.price,
            description: params.description,
            category: params.category
        }
        return await Product.create(values);
    },

    updateProduct: async(id,params) => {
        const paramUpdate = { 
            name: params.name,
            price: params.price,
            description: params.description,
            category: params.category
        };
        const updatedProduct = await Product.findByIdAndUpdate(id, paramUpdate, { new: true});

        return updatedProduct;
    }
};

export default ProductService;
