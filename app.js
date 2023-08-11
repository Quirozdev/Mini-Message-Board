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

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}
  `);
});
