const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: { type: String, minLength: 1, maxLength: 300, required: true },
  user: { type: String, required: true },
  added: { type: Date, required: true },
});

module.exports = mongoose.model('Message', MessageSchema);
