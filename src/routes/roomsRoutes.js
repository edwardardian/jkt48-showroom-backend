const express = require("express");
const rooms = require("../controller/rooms");
const routes = express.Router();

routes.get("/profile/allmember", rooms.getAllMemberProfiles);
routes.get("/profile/alltrainee", rooms.getAllTraineeProfiles);
routes.get("/profile/:memberId", rooms.getProfile);

module.exports = routes;
