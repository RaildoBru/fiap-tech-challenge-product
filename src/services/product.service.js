import Product from "../models/product.model.js";

const ProductService = {
    getProducts: async () => {
        return await Product.findAll();
    },

    findByIdProduct: async (id) => {
        return await Product.findByPk(id);
    },

    createProduct: async (params) => {
        const values = {
            name: params.name,
            price: params.price,
            description: params.description,
            category: params.category
        }
        return await Product.create(values);
    },

    updateProduct: async (id, params) => {
        const paramUpdate = {
            name: params.name,
            price: params.price,
            description: params.description,
            category: params.category
        };

        await Product.update(paramUpdate, {
            where: { id: id }
        });

        // Fetch and return the updated product
        const updatedProduct = await Product.findByPk(id);

        return updatedProduct;
    }
};

export default ProductService;
