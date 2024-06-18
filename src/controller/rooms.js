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
      res.status(500).send("Internal Server Error");
    }
  },

  getAllProfiles: async (req, res) => {
    try {
      const allProfiles = [];
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

      for (const memberId of allMemberId) {
        const roomId = memberRoom(memberId);
        if (roomId) {
          console.log(
            `Fetching profile for memberId: ${memberId}, roomId: ${roomId}`
          );

          const profile = await service(
            `${ROOM}/profile?room_id=${roomId}`,
            res
          );
          allProfiles.push(profile);
        }
      }

      res.send(allProfiles);
    } catch (error) {
      console.error("Error while fetching all room profiles:", error);
      res.status(500).send("Internal Server Error");
    }
  },
};

module.exports = rooms;
