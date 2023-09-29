/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-underscore-dangle */
const { MongoClient } = require("mongodb");
const { DATABASE_URL } = require("./config");

let MongoConnection;
const connect = async () => {
  try {
    MongoConnection = await MongoClient.connect(DATABASE_URL);
    return MongoConnection;
  } catch (err) {
    return err;
  }
};

const getDB = async () => {
  if (!MongoConnection) {
    await connect();
  }
  return MongoConnection.db();
};

const closeMongoDBConnection = async () => {
  await MongoConnection.close();
};

const deleteOrderChatMessage = async (orderId) => {
  try {
    const db = await getDB();
    const data = await db.collection("OrderChatMessages").deleteOne({
      order_id: parseInt(orderId, 10),
    });
    return JSON.stringify(data);
  } catch (err) {
    return err;
  }
};

const deletePastOrder = async (orderId) => {
  try {
    const db = await getDB();
    const data = await db.collection("PastOrders").deleteOne({
      _id: parseInt(orderId, 10),
    });
    return JSON.stringify(data);
  } catch (err) {
    return err;
  }
};

// -- End of Group 3 DB calls --

module.exports = {
  closeMongoDBConnection,
  getDB,
  connect,
  deleteOrderChatMessage,
  deletePastOrder,
};
