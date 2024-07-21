const express = require("express");
const rooms = require("../controller/rooms");
const routes = express.Router();

routes.get("/profile/allmember", rooms.getAllProfiles);
routes.get("/profile/:memberId", rooms.getProfile);

module.exports = routes;
