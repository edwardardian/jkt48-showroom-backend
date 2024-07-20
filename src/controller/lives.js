const { LIVE } = require("../utils/api");
const service = require("../utils/service");
const memberRoom = require("../utils/memberRooms");

const lives = {
  getMemberStreamUrl: async (res) => {
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
        console.log(`Fetching streaming URL for memberId: ${memberId}`);
        const roomId = memberRoom(memberId);
        if (roomId) {
          console.log(
            `Fetching streaming URL for memberId: ${memberId}, roomId: ${roomId}`
          );

          const memberStreamUrl = await service(
            `${LIVE}/streaming_url?room_id=${roomId}`,
            res
          );

          allMemberLives.push(memberStreamUrl);
        } else {
          console.log(`Streaming URL not found for memberId: ${memberId}`);
        }
      }

      res.send(allMemberLives);
    } catch (error) {
      console.error("Error while fetching all member streaming URL:", error);
    }
  },
};
module.exports = lives;
