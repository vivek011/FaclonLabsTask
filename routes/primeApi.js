var express = require('express');
var contact = require('../app/controllers/primeApi.js')
var router = express.Router();

var x=Math.round(Math.random()*100);
var url='http://127.0.0.1:3000/primeApi'+'/primeNumber'+'/number='+x;

console.log('Generated Url to get prime number: ',url);;

router.post('/primeNumber'+'/number='+x,contact.primeNumber);



module.exports = router;
