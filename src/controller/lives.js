const { LIVE } = require("../utils/api");
const service = require("../utils/service");
const memberRoom = require("../utils/memberRooms");

const lives = {
  getMemberStreamUrl: async (req, res) => {
    try {
      const allMemberId = [
        "amanda",
        "christy",
        "lia",
        "zee",
        "callie",
        "oniel",
        "olla",
        "feni",
        "fiony",
        "flora",
        "freya",
        "ella",
        "gita",
        "gracie",
        "greesel",
        "eli",
        "indah",
        "indira",
        "jessi",
        "lyn",
        "kathrina",
        "lulu",
        "marsha",
        "muthe",
        "raisha",
        "adel",
        "gracia",
      ];

      const livePromises = allMemberId.map(async (memberId) => {
        const roomId = memberRoom(memberId);
        if (!roomId) {
          console.log(`Room ID not found for ${memberId}`);
          return {
            memberId,
            roomId: null,
            streamingUrl: null,
            error: "Room ID not found",
          };
        }

        console.log(
          `Fetching streaming URL for memberId: ${memberId}, roomId: ${roomId}`
        );

        try {
          const live = await service(`${LIVE}/streaming_url?room_id=${roomId}`);
          return { memberId, roomId, streamingUrl: live };
        } catch (error) {
          console.error(
            `Error fetching live URL for ${memberId}:`,
            error.message
          );
          return { memberId, roomId, streamingUrl: null, error: error.message };
        }
      });

      const livesData = await Promise.all(livePromises);

      res.status(200).send({
        status: true,
        message: "Successfully fetched all member streaming URLs",
        data: livesData,
      });
    } catch (error) {
      console.error("Error while fetching all member lives URL:", error);
      if (!res.headersSent) {
        res
          .status(500)
          .send({ status: false, message: "Internal Server Error" });
      }
    }
  },

  getAllTrainee: async (req, res) => {
    try {
      const allTraineeId = [
        "aralie",
        "delynn",
        "alya",
        "anindya",
        "lana",
        "erine",
        "cathy",
        "elin",
        "chelsea",
        "cynthia",
        "danella",
        "daisy",
        "fritzy",
        "gendis",
        "lily",
        "trisha",
        "moreen",
        "michie",
        "levi",
        "nayla",
        "nachia",
        "oline",
        "regie",
        "ribka",
        "nala",
        "kimmy",
      ];

      const livePromises = allTraineeId.map(async (memberId) => {
        // FIXED: Menggunakan allTraineeId
        const roomId = memberRoom(memberId);
        if (!roomId) {
          console.log(`Room ID not found for ${memberId}`);
          return {
            memberId,
            roomId: null,
            streamingUrl: null,
            error: "Room ID not found",
          };
        }

        console.log(
          `Fetching streaming URL for memberId: ${memberId}, roomId: ${roomId}`
        );

        try {
          const live = await service(`${LIVE}/streaming_url?room_id=${roomId}`);
          return { memberId, roomId, streamingUrl: live };
        } catch (error) {
          console.error(
            `Error fetching live URL for ${memberId}:`,
            error.message
          );
          return { memberId, roomId, streamingUrl: null, error: error.message };
        }
      });

      const livesData = await Promise.all(livePromises);

      res.status(200).send({
        status: true,
        message: "Successfully fetched all trainee streaming URLs",
        data: livesData,
      });
    } catch (error) {
      console.error("Error while fetching all trainee lives URL:", error);
      if (!res.headersSent) {
        res
          .status(500)
          .send({ status: false, message: "Internal Server Error" });
      }
    }
  },
};

module.exports = lives;
