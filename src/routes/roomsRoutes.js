const express = require("express");
const rooms = require("../controller/rooms");
const routes = express.Router();

routes.get("/profile/allmember", rooms.getAllMember);
routes.get("/profile/alltrainee", rooms.getAllTrainee);
routes.get("/profile/:memberId", rooms.getProfile);

module.exports = routes;
