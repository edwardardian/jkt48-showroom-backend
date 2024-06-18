const getMemberRooms = (type) => {
  let rooms;
  if (type === "traineeMember") {
    rooms = {
      aralie: "509985",
      delynn: "509992",
      shasa: "509995",
      alya: "461451",
      anindya: "461452",
      lana: "509997",
      erine: "510000",
      cathy: "461454",
      elin: "461475",
      chelsea: "461458",
      cynthia: "461463",
      danella: "461466",
      daisy: "461465",
      fritzy: "510011",
      gendis: "461476",
      lily: "510012",
      trisha: "510013",
      moreen: "510014",
      michie: "461481",
      levi: "510016",
      nayla: "510064",
      nachia: "510065",
      oline: "510067",
      regie: "510068",
      ribka: "510070",
      nala: "510071",
      kimmy: "510073",
    };
  } else {
    rooms = {
      amanda: "400710",
      christy: "318112",
      lia: "400713",
      zee: "317727",
      callie: "400714",
      oniel: "318218",
      olla: "318218",
      feni: "317738",
      fiony: "318223",
      flora: "318224",
      freya: "318224",
      ella: "400715",
      gita: "318117",
      gracie: "461478",
      greesel: "461479",
      eli: "318118",
      indah: "318227",
      indira: "400716",
      jessi: "318228",
      lyn: "400717",
      kathrina: "318230",
      lulu: "318232",
      marsha: "318233",
      muthe: "318204",
      raisha: "400718",
      adel: "318239",
      gracia: "318208",
    };
  }

  return rooms;
};

const memberRoom = (memberId) => {
  const traineeRooms = getMemberRooms("traineeMember");
  const otherRooms = getMemberRooms("other");
  const allRooms = { ...traineeRooms, ...otherRooms };
  const roomId = allRooms[memberId] || null;
  console.log(`memberId: ${memberId}, roomId: ${roomId}`);
  return roomId;
};

module.exports = memberRoom;
