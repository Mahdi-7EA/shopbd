const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// সব প্রোডাক্ট পাও
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// নতুন প্রোডাক্ট যোগ করো
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;