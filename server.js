const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require("mongodb");
var mongoose = require('mongoose');
var app = express();
var router = express.Router();
const dbConfig = require('./config/database.config.js');

var user = require('./routes/user.js');
var contacts = require('./routes/contacts.js');
var primeApi = require('./routes/primeApi.js');

// Connecting to the database

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/primeApi', primeApi);
app.use('/user',user);
app.use('/contacts',contacts);


var server = http.createServer(app);
server.listen(port, hostname, (req,res) => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
