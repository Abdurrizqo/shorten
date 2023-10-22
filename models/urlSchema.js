const mongoose = require('mongoose');
const { Schema } = mongoose;

const urlSchema = new Schema({
  title: { type: String, required: true },
  realUrl: { type: String, required: true },
  shortenUrl: { type: String, required: true, unique: true },
  user: { type: mongoose.Schema.ObjectId, required: true },
});

const url = mongoose.model('Url', urlSchema);

module.exports = url;
