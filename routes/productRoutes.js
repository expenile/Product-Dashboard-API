const ensureAuthenticated = require("../auth");
const {
  createProduct,
  getProducts,
  getProductsById,
  updateProductById,
  deleteById,
} = require("../controllers/productController");

const router = require("express").Router();

router.post("/", ensureAuthenticated, createProduct);
router.get("/", getProducts);
router.get("/:id", getProductsById);
router.put("/:id", ensureAuthenticated, updateProductById);
router.delete("/:id", ensureAuthenticated, deleteById);

module.exports = router;
