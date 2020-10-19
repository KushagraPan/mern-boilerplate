const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");
const { User } = require("./models/user");

mongoose
  .connect(config.MONGO_URI, {
    useNewUrlParser: true,

    useUnifiedTopology: true,

    useCreateIndex: true,
  })
  .then(() => console.log("Connected"))
  .catch(err => console.error(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ Heel: "When HBk became heel" });
});

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userData) => {
    if (err) return res.json({ succes: false, err });
    return res.status(200).json({ success: true });
  });
});

app.get("/", (req, res) => res.send("Hello World"));

app.listen(5000);
