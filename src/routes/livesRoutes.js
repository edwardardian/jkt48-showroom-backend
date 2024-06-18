const express = require("express");
const lives = require("../controller/lives");
const routes = express.Router();

routes.get("/stream/:memberId", lives.getStreamUrl);

module.exports = routes;
