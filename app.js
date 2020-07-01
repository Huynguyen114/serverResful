const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
require('dotenv/config');

app.use(bodyParser.json());

//import Router
const postRoute = require('./routers/post');
app.use('/post', postRoute);
//connect to db

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('connect to db');
});

//How to we start listening to the server
app.listen(PORT);

//1gjy6nCM2Ru05RQA
