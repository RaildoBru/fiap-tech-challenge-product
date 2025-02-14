import ProductService from "../services/product.service.js"

export const createProduct = async (req, res) => {
  try{
    const productService = await ProductService.createProduct(req.body);
    res.json(productService);
  } catch(error){
    res.status(500).json({ message: error.message });  
  }
};

export const getProduct = async (req, res) => {
    try {
    const productService = await ProductService.getProducts();
    res.json(productService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const productService = await ProductService.findByIdProduct(req.params.id);
    res.json(productService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try{
    const productService = await ProductService.updateProduct(req.params.id, req.body);
    res.json(productService);
  } catch(error){
    res.status(500).json({ message: error.message });  
  }
};