const db = require('./database');

const getAllEvents = async (req, res) => {
  try {
    const result = await db.getAllEvents();
    res.status(200).json({ result });
  } catch (err) {
    res.status(401).json({ error: err });
  }
};

const createEvent = async (req, res) => {
  try {
    const { title, date, description, zoom, owner, categories } = req.query;

    const result = await db.createEvent(title, date, description, zoom, owner, categories);
    res.status(200).json({ result });
  } catch (err) {
    res.status(401).json({ error: err });
  }
};

const editEvent = async (req, res) => {
  try {
    const { id, type, to } = req.query;
    const result = await db.editEvent(id, type, to);
    res.status(200).json({ result });
  } catch (err) {
    res.status(401).json({ error: err });
  }
};

const cancelEvent = async (req, res) => {
  try {
    const { id } = req.query;

    const result = await db.cancelEvent(id);
    res.status(200).json({ result });
  } catch (err) {
    res.status(401).json({ error: err });
  }
};

const eventsRoutes = {
  getAllEvents,
  createEvent,
  cancelEvent,
  editEvent,
};

module.exports = eventsRoutes;
