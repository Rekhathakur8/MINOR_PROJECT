import express from "express";

const router = express.Router();

import Room from "../models/rooms.js";

router.get("/random", async (req, res) => {
  try {
    const count = Math.floor(Math.random() * 2) + 3;
    const rooms = await Room.aggregate([{ $sample: { size: count } }]);
    console.log("Rooms fetched by aggregation:", rooms);
    if (rooms.length > 0) {
      const allRooms = await Room.find();
      rooms = allRooms;
    } else {
      console.log("no rooms are available");
      res.json(rooms);
    }
  } catch (err) {
    res.json(err);
  }
});

export default router;
