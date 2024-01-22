const Product = require("../models/product");

const createProduct = async (req, res) => {
  const body = req.body;
  console.log("userInfo ", req.userInfo);

  try {
    const product = new Product(body);
    const result = await product.save();
    res.status(201).json({ message: "Product created successfully", result });
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getProducts = async (req, res) => {
  try {
    const result = await Product.find({});
    res
      .status(200)
      .json({ message: "Products retrieved successfully", products: result });
  } catch (err) {
    console.error("Error getting products:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getProductsById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Product.findById(id);

    if (!result) {
      return res.status(404).json({ message: "Product not found" });
    }

    res
      .status(200)
      .json({ message: "Product retrieved successfully", data: result });
  } catch (err) {
    console.error("Error getting product by ID:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const updateDoc = { $set: { ...body }, updatedAt: Date.now() };
    const result = await Product.findByIdAndUpdate(id, updateDoc);

    if (!result) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product updated successfully" });
  } catch (err) {
    console.error("Error updating product by ID:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Product.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Error deleting product by ID:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductsById,
  updateProductById,
  deleteById,
};
