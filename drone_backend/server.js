require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const addressRoutes = require("./routes/addressRoutes");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");

// CORS configuration
const corsOptions = {
    origin: process.env.BASE_URL ,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
};

const app = express();


// Middleware
app.use(bodyParser.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === "production" }, // Set 'secure: true' if using HTTPS (production)
  })
);

// Enable CORS with options
app.use(cors(corsOptions));

// Routes
app.use("/api/user", addressRoutes);
app.use("/api/auth", authRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
