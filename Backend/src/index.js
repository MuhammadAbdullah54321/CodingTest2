import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const image = require('./controllers/image.controller.js');

// create express app
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "This is the best random Image displayer in the world "});
});

//This is the main route of our application
app.get('/retrieve-img', image.findOne);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});