const express = require("express"),
  passport = require("passport");

const router = express.Router();

router.post("/", passport.authenticate("local"), function (req, res) {
  return res.status(200).json({ msg: "Login Complete" });
});

module.exports = router;
