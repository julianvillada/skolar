const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  code: String,
  active: Boolean,
  description: String,
  startDate: Date,
  endDate: Date
});

const Edition = mongoose.model('Edition', schema);

module.exports = Edition;