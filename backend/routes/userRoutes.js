const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "Data saved", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
