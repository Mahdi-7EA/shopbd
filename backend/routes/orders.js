const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// নতুন অর্ডার দাও
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: "✅ Order placed successfully!", order });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// সব অর্ডার দেখো
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;