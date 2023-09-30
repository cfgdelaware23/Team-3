const bcrypt = require("bcrypt");

const getUser = async (req, res) => {
  console.log("fetching user");

  // check if email exist in db

  // if it exist , check if password exist
  const passwordFromDb = bcrypt.compareSync("B4c0//", hash); // true

  // comparing password

  // if both true, return user
};
const getUserById = async (req, res) => {
  const id = req.params.userId;
  console.log(id);
};

const addUser = async (req, res) => {
  const { email, password } = req.body;
  res.json({ email, password });

  // hashing password before sending to db
  var salt = bcrypt.genSaltSync(10);
  var hashedPsssword = bcrypt.hashSync("B4c0//", salt);
  console.log(hashedPsssword);

  // create user with hashed ps
};

const userRoutes = {
  getUser,
  addUser,
  getUserById,
};

module.exports = userRoutes;
