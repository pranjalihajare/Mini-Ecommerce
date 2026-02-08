const products = require("../data/products.json");

exports.getProducts = (req, res) => {
  try {
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.addCart = (req, res) => {
  res.status(200).json({
    message: "Cart received successfully",
    data: req.body
  });
};
