//import modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//port number
const port = 3000;

//adding middleware - cors - parser
app.use(cors());
app.use(bodyParser.json());//to parse our json data

//static files
app.use(express.static(path.join(__dirname, 'public')))//basically join any current dir to public


//anything with /api or anything will be forwarded or directed to my route.js file
app.use('/api', route);

//Define a route for our home page... testing Server
app.get('/', (req, res) => {
    res.send('completed your first step')
})

//tell the terminal what to listen to
app.listen(port, ()=> {
    console.log('Server is listening to: '+port);
})