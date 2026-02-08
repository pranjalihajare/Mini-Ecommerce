const validateCart = (req, res, next) => {
  if (!req.body.items || req.body.items.length === 0) {
    return res.status(400).json({
      message: "Cart items required"
    });
  }
  next();
};

module.exports = validateCart;
