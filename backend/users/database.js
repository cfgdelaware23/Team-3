const { getDB } = require("../database");

// const getAllUsers = async () => {
//   try {
//     const db = await getDB();
//     const result = await db.collection("Users").findOne();
//     return result;
//   } catch (err) {
//     return err;
//   }
// };

const database = {
  getAllEvents,
};

module.exports = database;
