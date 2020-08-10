const express = require('express');
      passport = require('passport');

const router = express.Router();

router.get('/', function(req, res) {
    if (req.user) {
        res.json({ user: req.user });
    } else {
        res.json({ user: null });
    }
});

module.exports = router;