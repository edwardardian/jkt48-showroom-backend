const { LIVE } = require("../utils/api");
const service = require("../utils/service");
const memberRoom = require("../utils/memberRooms");

const lives = {
  getMemberStreamUrl: async (req, res) => {
    try {
      const allMemberLives = [];
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

      for (const memberId of allMemberId) {
        try {
          console.log(`Fetching streaming URL for memberId: ${memberId}`);
          const roomId = memberRoom(memberId);

          if (roomId) {
            const memberStreamUrl = await service(
              `${LIVE}/streaming_url?room_id=${roomId}`
            );

            allMemberLives.push({
              memberId,
              roomId,
              streamingUrl: memberStreamUrl,
            });
          } else {
            console.log(`Room ID not found for memberId: ${memberId}`);
            allMemberLives.push({
              memberId,
              roomId: null,
              streamingUrl: null,
              error: "Room ID not found",
            });
          }
        } catch (error) {
          console.error(
            `Error fetching streaming URL for ${memberId}:`,
            error.message
          );
          allMemberLives.push({
            memberId,
            roomId: null,
            streamingUrl: null,
            error: error.message,
          });
        }
      }

      res.status(200).send({
        status: true,
        message: "Successfully fetched all member streaming URLs",
        data: allMemberLives,
      });
    } catch (error) {
      console.error("Error while fetching all member streaming URLs:", error);
      res.status(500).send({
        status: false,
        message: "Internal Server Error",
      });
    }
  },
};

module.exports = lives;
