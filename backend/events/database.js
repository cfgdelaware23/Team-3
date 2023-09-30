const { getDB } = require("../database");
const { ObjectId } = require("mongodb");

const getAllEvents = async () => {
  try {
    const db = await getDB();
    const result = await db.collection("Events").find({}).toArray();
    return result;
  } catch (err) {
    return err;
  }
};

const createEvent = async (
  title,
  date,
  description,
  zoom,
  owner,
  categories
) => {
  try {
    const db = await getDB();
    const result = await db.collection("Events").insertOne({
      title,
      date,
      description,
      zoom,
      owner,
      categories,
    });
    return result?.insertedId;
  } catch (err) {
    return err;
  }
};

const editEvent = async (id, type, to) => {
  try {
    const db = await getDB();
    const result = await db.collection("Events").updateMany(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          [type]: to,
        },
      }
    );
    return result?.insertedId;
  } catch (err) {
    return err;
  }
};

const cancelEvent = async (id) => {
  try {
    const db = await getDB();
    const result = await db
      .collection("Events")
      .deleteOne({ _id: new ObjectId(id) });
    return result?.insertedId;
  } catch (err) {
    return err;
  }
};

const database = {
  getAllEvents,
  createEvent,
  cancelEvent,
  editEvent,
};

module.exports = database;
