const express = require("express");
const app = express();
const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://Kaypee:3TopSecret3@cluster0.ggyk8.mongodb.net/React-Blog?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,

    useUnifiedTopology: true,

    useCreateIndex: true,
  })
  .then(() => console.log("Connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => res.send("Hello World"));

app.listen(5000);
