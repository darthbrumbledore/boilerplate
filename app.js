// #### Setting up all my required libraries ####
const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const path = require('path');

// #### Setting up the port to work localhost and when deployed ####

const port = process.env.PORT || 3000;

// #### Setting up all custom libraries and files ####
const {mongoose} = require('./db/mongoose');

// #### Create express instance ####
var app = express();

// #### Setup middleware ####
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// #### Setup routes ####
app.get();

app.post();

app.patch();

app.delete();



// #### Set up listener ####
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
