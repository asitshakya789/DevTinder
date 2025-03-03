const express = require("express");

const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.use(express.json()); // Middleware to parse JSON request bodies

app.post("/signup", async (req, res) => {
  try {
    const user = new User({
      firstname: "Asit",
      lastname: "Kumar",
      email: "techasit@gmail.com",
      password: "123456",
      age: 20,
    });

    await user.save(); // Corrected the typo from `seve` to `save`
    res.status(201).send("User created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating user");
  }
});

connectDB()
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Database connection failed", err);
  });
