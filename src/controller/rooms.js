const { BASE_URL, ROOM, LIVE } = require("../utils/api");
const service = require("../utils/service");
const memberRoom = require("../utils/memberRooms");

const rooms = {
  getProfile: async (req, res) => {
    try {
      const { memberId } = req.params;
      console.log(`Received memberId: ${memberId}`);
      const roomId = memberRoom(memberId);

      if (!roomId) {
        console.log(`Room not found for memberId: ${memberId}`);
        return res.status(404).send({ message: "Room not found" });
      }

      console.log(`Fetching profile for roomId: ${roomId}`);
      const profile = await service(`${ROOM}/profile?room_id=${roomId}`, res);
      res.send(profile);
    } catch (error) {
      console.error("Error while fetching room profile:", error);
      if (!res.headersSent) {
        res.status(500).send("Internal Server Error");
      }
    }
  },

  getAllProfiles: async (req, res) => {
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

      const allIds = [...allMemberId, ...allTraineeId];

      const profilePromises = allIds.map(async (memberId) => {
        const roomId = memberRoom(memberId);
        if (roomId) {
          console.log(
            `Fetching profile for memberId: ${memberId}, roomId: ${roomId}`
          );
          try {
            const profile = await service(
              `${ROOM}/profile?room_id=${roomId}`,
              res
            );
            return profile;
          } catch (error) {
            console.error(
              `Error while fetching profile for memberId: ${memberId}`,
              error
            );
            return null;
          }
        } else {
          console.log(`Room not found for memberId: ${memberId}`);
          return null;
        }
      });

      const profiles = await Promise.all(profilePromises);
      const validProfiles = profiles.filter((profile) => profile !== null);

      res.send(validProfiles);
    } catch (error) {
      console.error("Error while fetching all profiles:", error);
      if (!res.headersSent) {
        res.status(500).send("Internal Server Error");
      }
    }
  },
};

module.exports = rooms;
