const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const blog = require('./routes/index');


//Bodyparser middleware
app.use(bodyParser.json());


//Db config

const db = require('./config').mongoURI;

//connnect to mongo
mongoose.connect(db,{ useNewUrlParser: true }).then(
    ()=> {
        console.log("Successfully connected to the database.");
    },
    err => {
        console.log("ERROR connecting to the database.");
        throw err;
    }
);

//Use Routes
app.use('/', blog);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port 5000...'));

