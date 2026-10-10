/*
//const User = require("./models/User");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/mydb")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});
app.post("/add-user", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email
  });

  await user.save();
  res.send("User saved in MongoDB");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
const User = require("./models/User");

app.post("/add-user", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "User saved" });
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
*/

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const User = require("./models/User");

const app = express();
const port = Number(process.env.PORT || 5000);
const mongoUri = process.env.MONGODB_URI;

// middleware
app.use(cors());
app.use(express.json());

// Existing root route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/health", (req, res) => {
  const databaseConnected = mongoose.connection.readyState === 1;
  res.status(databaseConnected ? 200 : 503).json({
    status: databaseConnected ? "ok" : "unavailable",
    database: databaseConnected ? "connected" : "disconnected"
  });
});

// POST route to save data
app.post("/api/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.status(201).json({
      message: "Data saved successfully",
      user
    });
  } catch (error) {
    console.error("Failed to save user:", error.name);
    res.status(500).json({ error: "Unable to save user data" });
  }
});

async function startServer() {
  if (!mongoUri) {
    console.error("MONGODB_URI is required");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
    app.listen(port, "0.0.0.0", () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.error("Could not connect to MongoDB:", error.name);
    process.exit(1);
  }
}

startServer();
