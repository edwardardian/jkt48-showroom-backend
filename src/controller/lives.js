const { LIVE } = require("../utils/api");
const service = require("../utils/service");
const memberRoom = require("../utils/memberRooms");

const lives = {
  getStreamUrl: async (req, res) => {
    try {
      const { memberId } = req.params;
      const roomId = memberRoom(memberId);

      if (!roomId) {
        return res
          .status(404)
          .send({ message: "Room not found for the given member ID" });
      }

      const url = await service(`${LIVE}/streaming_url?room_id=${roomId}`, res);
      res.send(url);
    } catch (error) {
      console.error("Error while fetching lives:", error);
      res.status(500).send("Internal Server Error");
    }
  },
};

module.exports = lives;
