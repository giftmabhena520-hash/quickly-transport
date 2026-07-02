const express = require("express");

const router = express.Router();

// Register user

router.post("/register", (req, res) => {

  const { name, email, phone, password, role } = req.body;

  res.status(201).json({

    message: "Registration successful",

    user: {

      name,

      email,

      phone,

      role

    }

  });

});

// Login user

router.post("/login", (req, res) => {

  const { email } = req.body;

  res.json({

    message: "Login successful",

    email

  });

});

module.exports = router;