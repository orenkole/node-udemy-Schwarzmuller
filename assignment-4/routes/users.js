const express = require('express');
const path = require('path');
const mainData = require('./index');

const router = express.Router();

router.get('/', (req, res, next) => {
  const users = mainData.users;
  console.log(users);
  res.render('users',
   {users: users}
  );
})

module.exports = router;