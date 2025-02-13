const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db.js");
const User = require("./Models/user.js");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
connectDB();

//midlewares
app.use(express.json());
app.use(cors());

app.post("/api/user/Register", async (req, res) => {
  try {
    console.log(req.body);

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
      firstName: req.body.firstName,
      secondName: req.body.secondName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: hashedPassword,
      rememberMe: req.body.RememberMe,
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("api/login", async (req, res) => {
  try {

    const user = User.find({
        email : req.body.email
    });

    if (user) {
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (isPasswordValid) {
        const token = jwt.sign(
          {
            email: user.email,
            password: user.password,
          },
          "sectret55"
        );
        return res.json({ status: "ok", user: token });
      } else {
        return res.json({
          status: "error",
          user: false,
          error: "Invalid password",
        });
      }
    } else {
      return res.json({
        status: "error",
        user: false,
        error: "User not found",
      });
    }

  } catch (err) {
        res.json({ status: "error", error: "Something went wrong" });
    console.error(err);
  }
});

const PORT = process.env.PORT || 7070;

app.listen(PORT, () => console.log(`surver is running on ${PORT}`));
