const { getDB } = require("../database");

const getAllEvents = async () => {
  try {
    const db = await getDB();
    const result = await db.collection("Events").find({}).toArray();
    return result;
  } catch (err) {
    return err;
  }
};

const database = {
  getAllEvents,
};

module.exports = database;
