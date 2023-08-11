const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

function connectToDatabase(mongoUri) {
  return mongoose
    .connect(mongoUri)
    .then(() => console.log('Connected to the database!'))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

module.exports = { connectToDatabase };
