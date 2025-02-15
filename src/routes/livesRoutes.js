const express = require("express");
const lives = require("../controller/lives");
const routes = express.Router();

routes.get("/stream/allmember", lives.getMemberStreamUrl);
routes.get("/stream/alltrainee", lives.getAllTrainee);

module.exports = routes;
