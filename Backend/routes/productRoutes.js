const express = require("express");
const router = express.Router();

const {
  getProducts,
  addCart
} = require("../controllers/productController");

const validateCart = require("../middleware/validateCart");

router.get("/products", getProducts);
router.post("/cart", validateCart, addCart);

module.exports = router;
