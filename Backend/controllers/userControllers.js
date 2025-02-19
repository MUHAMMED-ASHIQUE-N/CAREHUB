  const User = require("../Models/user");
  const bcrypt = require("bcrypt");
  const jwt = require("jsonwebtoken");
  const dotenv = require('dotenv')

  dotenv.config()

const userRegister = async (req, res) => {
  try {
    const { firstName, secondName, email, phoneNumber, password, RememberMe } =
      req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      secondName,
      email,
      phoneNumber,
      password: hashedPassword,
      RememberMe,
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Internal server error" });
  }
};

