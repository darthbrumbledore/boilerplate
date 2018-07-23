const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const path = require('path');

const port = process.env.PORT || 3000;

const {mongoose} = require('./db/mongoose');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get();

app.post();

app.patch();

app.delete();




app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
