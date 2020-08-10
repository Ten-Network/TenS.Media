const express = require('express');

const router = express.Router();

router.post('/', function(req, res) {
    if (req.user) {
        req.logout();
        res.send({ msg: 'logging out' });
    } else {
        res.send({ msg: 'no user to logout' });
    }
});

module.exports = router;