const { Router } = require('express');
const express = require('express');
const route = express.Router();
const authCountroller = require('../countroller/authCountroller')
const isAuth = require('../middleware/isAuth');

route.post('/signup',authCountroller.signUp);
route.post('/login',authCountroller.Login);
route.get('/findbld',isAuth,authCountroller.findBlood);
route.post('/searchbld',isAuth,authCountroller.searchbld);

module.exports = route;