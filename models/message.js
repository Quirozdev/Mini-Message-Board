const mongoose = require('mongoose');
const { formatDate } = require('../utils.js');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: { type: String, minLength: 1, maxLength: 300, required: true },
  user: { type: String, required: true },
  added: { type: Date, required: true },
});

MessageSchema.virtual('formattedDate').get(function () {
  return formatDate(this.added);
});

module.exports = mongoose.model('Message', MessageSchema);
