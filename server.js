const express = require("express");
const cors = require("cors");
const app = express();
const roomsRouter = require("./src/routes/roomsRoutes");
const livesRouter = require("./src/routes/livesRoutes");

app.use(cors());

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to JKT 48 Showroom API Fanmade",
    author: "https://github.com/edwardardian",
  });
});

app.use("/api/rooms", roomsRouter);
app.use("/api/lives", livesRouter);

const init = async () => {
  const port = 3000;
  app.listen(port, () => {
    console.log(`HTTP Server running on http://localhost:${port}`);
  });
};

init();
