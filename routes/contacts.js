var express = require('express');
var contact = require('../app/controllers/contacts.js')
var router = express.Router();

router.post('/creteContactsProfile',contact.creteContactsProfile);



module.exports = router;
