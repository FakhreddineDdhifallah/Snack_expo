const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

// User Signup
router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create new user
    const user = new User({ fullName, email, password });
    await user.save();

    // Create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Google Sign-In (token verification)
router.post("/google-auth", async (req, res) => {
  const { token } = req.body;

  try {
    // Verify token with Google API
    const googleResponse = await fetch(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${token}`
    );
    const googleUser = await googleResponse.json();

    if (googleUser.error) {
      return res.status(400).json({ error: "Invalid Google token" });
    }

    // Check if user already exists
    let user = await User.findOne({ email: googleUser.email });
    if (!user) {
      user = new User({
        fullName: googleUser.name,
        email: googleUser.email,
        googleId: googleUser.sub,
      });
      await user.save();
    }

    // Create token
    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ user, token: jwtToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
