import ProductService from "../services/product.service.js"

export const getProduct = async (req, res) => {
    try {
    const productService = await ProductService.getProducts();
    res.json(productService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
