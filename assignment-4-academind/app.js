const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
const users = []

app.use(bodyParser.urlencoded({extended: false}))
app.get('/', (req, res, next) => {
  res.render('index',
  {
    pageTile: "Add User"
  });
});
app.get('/users', (req, res, next) => {
  console.log(users);
  res.render("users", {
    pageTitle: "Users",
    users: users
  });
});
app.post('/', (req, res, next) => {
  users.push({name: req.body.username})
  res.redirect("/users");
});

app.listen(3000);