const productService = require("../services/product.service");

// Create a new product
const createProduct = async (req, res) => {
  const reqBody = req.body;
  console.log("🚀 ~ createProduct ~ reqBody:", reqBody);
  try {
    if (!reqBody) {
      return res.status(400).json({ message: "Invalid request body" });
    }
    const product = await productService.createProduct(reqBody);
    console.log("🚀 ~ createProduct ~ product:", product);
    return res.status(200).json({ message: "Product created successfully", product });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Update an existing product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const reqBody = req.body;
  console.log("🚀 ~ updateProduct ~ reqBody:", reqBody);
  try {
    if (!reqBody) {
      return res.status(400).json({ message: "Invalid request body" });
    }
    const updatedProduct = await productService.updateProduct(id, reqBody);
    console.log("🚀 ~ updateProduct ~ updatedProduct:", updatedProduct);
    return res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  console.log("🚀 ~ deleteProduct ~ id:", id);
  try {
    await productService.deleteProduct(id);
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    console.log("🚀 ~ getAllProducts ~ products:", products);
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
};
