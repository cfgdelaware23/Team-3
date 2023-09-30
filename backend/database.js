const { MongoClient } = require('mongodb');
const { DATABASE_URL } = require('./config');

let MongoConnection;
const connect = async () => {
  try {
    MongoConnection = await MongoClient.connect(
      DATABASE_URL,
    );
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

module.exports = {
  closeMongoDBConnection,
  getDB,
  connect,
};
