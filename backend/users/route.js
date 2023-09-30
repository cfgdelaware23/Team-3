const bcrypt = require("bcrypt");
const { ObjectId } = require("mongodb");
const { getDB } = require("../database");

const getUsers = async (req, res) => {
  console.log("fetching all users");
  const db = await getDB();
  try {
    const users = await db.collection("Users").find().toArray();
    console.log(users);
    res.json({ users });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
const insertEvent = async (req, res) => {
  console.log("inserting Event ");
  const { pageData, user } = req.body;
  console.log("from route: ", pageData, user);
  // console.log("events: ", event);
  const db = await getDB();
  console.log("LLLL: ", user._id);
  try {
    const updatedUser = await db
      .collection("Users")
      .updateOne(
        { _id: new ObjectId(user._id) },
        { $push: { events: pageData } }
      );
    console.log(updatedUser);
    res.json({ message: "Added to events field", updatedUser });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const getUserByName = async (req, res) => {
  console.log("fetching single user");
  try {
    const id = req.params.id;
    console.log(id);

    const db = await getDB();

    const user = await db.collection("Users").find({ name: id }).toArray();
    console.log(user);
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const addUser = async (req, res) => {
  const {
    email,
    password,
    name,
    hours,
    eventsAttending,
    upcomingEvents,
    attendingThisWeek,
    insertEvent,
  } = req.body;

  // create user with hashed ps

  // check if email exist in db
  const db = await getDB();

  const currentUser = await db.collection("Users").findOne({ email });

  if (currentUser?.email) {
    console.log("User exist already");
    res.json({ message: "User already exist" });
  }

  // if it does not exist , create user.  hashing password before sending to db
  var hashedPsssword = await bcrypt.hash(password, 10);

  const newUser = await db.collection("Users").insertOne({
    email,
    password: hashedPsssword,
    name,
    hours,
    eventsAttending,
    upcomingEvents,
    attendingThisWeek,
  });

  // comparing password

  // if both true, return the current user
  res.json({ message: "Created new user", newUser });
};

const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    // checking if email exist in db

    const db = await getDB();

    const findByEmail = await db.collection("Users").findOne({
      email,
    });

    // making sure email exist in database
    if (!findByEmail?.email) {
      res.json({ message: "Email does not exist in the database" });
    } else {
      // var salt = bcrypt.genSaltSync(10);
      const passwordMatch = await bcrypt.compare(
        password,
        findByEmail.password
      ); // true
      if (!passwordMatch) {
        console.log("does not match");
        res.json({ message: "Password does not match, check credentials" });
      } else {
        console.log("matches");
        res.json({ message: "authenticated successfully!", findByEmail });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const userRoutes = {
  getUsers,
  addUser,
  getUserByName,
  signInUser,
  insertEvent,
};

module.exports = userRoutes;
