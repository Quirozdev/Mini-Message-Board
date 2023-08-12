const express = require('express');
const path = require('path');
const logger = require('morgan');
const { connectToDatabase } = require('./database');

const indexRouter = require('./routes/index');

const app = express();
require('dotenv').config();

(async function () {
  connectToDatabase(process.env.MONGO_URI);
})();

const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.log('xdddddddddddddddddddddd');
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}
  `);
});
