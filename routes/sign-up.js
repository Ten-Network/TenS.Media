const express = require("express"),
  passport = require("passport");

const router = express.Router();

const User = require("../models/user");

router.post("/", function (req, res) {
  const { name, email, username, password } = req.body;

  User.register(
    new User({
      name: name,
      username: username,
      email: email,
    }),
    password,
    function (error, user) {
      if (error) {
        return res.status(500).send(error.message);
      }

      passport.authenticate("local")(req, res, function () {
        return res.status(200).json({ msg: "Registeration Complete" });
      });
    }
  );
});

module.exports = router;
