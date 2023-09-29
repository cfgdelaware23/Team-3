const db = require('./database');

const getAllEvents = async (req, res) => {
  try {
    const result = await db.getAllEvents();
    res.status(200).json({ result });
  } catch (err) {
    res.status(401).json({ error: err });
  }
};

const eventsRoutes = {
  getAllEvents,
};

module.exports = eventsRoutes;
