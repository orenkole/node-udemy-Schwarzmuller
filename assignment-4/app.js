const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users');
const mainData = require('./routes/index')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', usersRoutes);
app.use(mainData.routes);
app.use((req, res, next) => {
  res.status(404).render("404",
    {pageTitle: "Page not found"}
  );
})


app.listen(3000);