const express = require('express');
const path = require('path');

const router = express.Router();
const users = [];

router.get('/', (req, res, next) => {
  res.render('index');
})
router.post('/', (req, res, next) => {
  users.push({user: req.body.username});
  res.redirect('/users')
  res.render('index');
})
module.exports.routes = router;
module.exports.users = users;