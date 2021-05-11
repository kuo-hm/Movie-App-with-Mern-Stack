const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv").config({ path: ".env" });

// Routes
const movieRouter = require("./routes/movie");
const authRouter = require("./routes/auth");

const app = express();

// Middlware
app.use(express.json({ extended: true }));

const cors = require("cors");
app.use(cors());

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(5000);

    console.log("Db connected and listening on port 5000");
  })
  .catch((err) => {
    console.log(err);
  });

// Route Middlwares
app.use("/api", movieRouter);
app.use("/api", authRouter);
