import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import registerModel from "./models/user.js";
import roomModel from "./models/rooms.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

mongoose.connect("mongodb://127.0.0.1:27017/User");

app.post("/login", (req, res) => {
  const { email, password, role } = req.body;
  registerModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        if (user.role === role) {
          res.json("success");
        }
      } else {
        res.json("incorrect");
      }
    } else {
      res.json("user not registred");
    }
  });
});

app.post("/register", (req, res) => {
  registerModel
    .create(req.body)
    .then((registerUser) => res.json(registerUser))
    .catch((err) => res.json(err));
});

app.post("/post-room", (req, res) => {
  roomModel
    .create(req.body)
    .then((rooms) => res.json(rooms))
    .catch((err) => res.json(err));
});

app.get("/random-rooms", async (req, res) => {
  try {
    const data = await roomModel.find();
    console.log(data);
    const fr = res.json(data);
    console.log(data);
    res.send(fr);
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("server is running");
});
