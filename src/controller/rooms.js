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

  getAllMember: async (req, res) => {
    try {
      const allMemberProfiles = [];
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
        console.log(`Fetching profile for memberId: ${memberId}`);
        const roomId = memberRoom(memberId);
        if (roomId) {
          console.log(
            `Fetching profile for memberId: ${memberId}, roomId: ${roomId}`
          );

          const profile = await service(
            `${ROOM}/profile?room_id=${roomId}`,
            res
          );
          allMemberProfiles.push(profile);
        } else {
          console.log(`Room not found for memberId: ${memberId}`);
        }
      }

      res.send(allMemberProfiles);
    } catch (error) {
      console.error("Error while fetching all member room profiles:", error);
      if (!res.headersSent) {
        res.status(500).send("Internal Server Error");
      }
    }
  },

  getAllTrainee: async (req, res) => {
    try {
      const allTraineeProfiles = [];
      const allTraineeId = [
        "aralie",
        "delynn",
        "shasa",
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

      for (const memberId of allTraineeId) {
        const roomId = memberRoom(memberId);
        if (roomId) {
          console.log(
            `Fetching profile for memberId: ${memberId}, roomId: ${roomId}`
          );

          const profile = await service(
            `${ROOM}/profile?room_id=${roomId}`,
            res
          );
          allTraineeProfiles.push(profile);
        } else {
          console.log(`Room not found for memberId: ${memberId}`);
        }
      }

      res.send(allTraineeProfiles);
    } catch (error) {
      console.error("Error while fetching all room profiles:", error);
      if (!res.headersSent) {
        res.status(500).send("Internal Server Error");
      }
    }
  },
};

module.exports = rooms;
