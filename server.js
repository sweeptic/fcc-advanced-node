'use strict';
require('dotenv').config();

const express = require('express');
const session = require('express-session');
const passport = require('passport');

const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const session_secret = process.env.SESSION_SECRET;

const app = express();
// app.engine('pug', require('pug').__express);

fccTesting(app); //For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: session_secret,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'pug');

app.route('/').get((req, res) => {
  res.render(process.cwd() + '/views/pug/index.pug', {
    title: 'Hello',
    message: 'Please login',
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
