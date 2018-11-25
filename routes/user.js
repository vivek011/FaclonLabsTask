var express = require('express');
var user = require('../app/controllers/user.js')
var router = express.Router();

router.post('/creteUserProfile',user.creteUserProfile);
router.post('/deleteUserProfile',user.deleteUserProfile);


module.exports = router;
