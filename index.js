const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
const userRoutes = require("./routes/userRoutes");

//MIDDLEWARES
dotenv.config();
app.use(bodyParser.json());
app.use("/api/user", userRoutes);

//Database Connection
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected To Database");
  }
);

//Port Listening
const port = process.env.PORT || 3000;
app.listen(port, (err, res) => {
  if (err) console.log(err);
  console.log(`Server is up on port ${port}`);
});
