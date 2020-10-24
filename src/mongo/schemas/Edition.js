const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  code: String,
  startDate: Date,
  endDate: Date,
  courseId : mongoose.Schema.Types.ObjectId
});


const Edition = mongoose.model('Edition', schema);

module.exports = Edition;