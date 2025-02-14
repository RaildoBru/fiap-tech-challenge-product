import ProductService from "../services/product.service.js"

const ProductController = {
  createProduct: async (req, res) => {
    try{

      const { name, description, price, category } = req.body;
      if (!name || !description || !price || !category) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const productService = await ProductService.createProduct(req.body);
      res.status(201).json(productService);
    } catch(error){
      res.status(500).json({ message: error.message });  
    }
  },

  getProducts: async (req, res) => {
      try {
      const productService = await ProductService.getProducts();
      res.status(200).json(productService);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getProductById: async (req, res) => {
    try {
      const productService = await ProductService.findByIdProduct(req.params.id);

      if (!productService) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json(productService);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateProduct: async (req, res) => {
    try{
      if (!req.body) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const productService = await ProductService.updateProduct(req.params.id, req.body);

      if (!productService) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json(productService);
    } catch(error){
      res.status(500).json({ message: error.message });  
    }
  }
}

export default ProductController;