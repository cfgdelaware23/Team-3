const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const events = require("./events/routes");
const userRoutes = require("./users/route");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "loginSecret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

app.get("/", (req, res) => {
  res.json({ messge: "server started" });
});

/* ---------------
 * EVENTS ROUTES
 * --------------- */
// Gets all events
app.get("/events", events.getAllEvents);

app.get("/users", userRoutes.getUsers);
app.get("/users/:id", userRoutes.getUserByName);
app.post("/users/createUser", userRoutes.addUser);
app.post("/users/signin", userRoutes.signInUser);

module.exports = app;
