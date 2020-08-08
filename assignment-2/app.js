const express = require('express');
const app = express();

// // second part of assignment
// app.use('/add-product', (req, res, next) => {
//   console.log('in the next middleware');
//   res.send('<h1>Add product</h1>')
// })
// app.use('/', (req, res, next) => {
//   console.log('in the next middleware');
//   res.send('<h1>Hello from express</h1>')
// })
// app.listen(3000);

// third part of assignment
app.use('/users', (req, res, next) => {
  res.send('<h1>On users page</h1>')
  next();
})
app.use('/', (req, res, next) => {
  res.send("<h1>on main page</h1>")
})
app.listen(3000);