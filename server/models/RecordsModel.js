const mongoose = require('mongoose');

const RecordSchema = mongoose.Schema({
   artist: {
      type: String,
      required: true
   },
   title: {
      type: String,
      required: true
   },
   prodYear: {
      type: Number,
      required: true
   },
   label: String,
   origin: String,
   price: {
      type: Number,
      default: ''
   },
   recordNum: String,
   numOfRecords: {
      type: Number,
      default: 1
   },
   released: String,
   info: String,
   photo: String,
   date: {
      type: Date,
      default: Date.now
   }

});


module.exports = mongoose.model('Records', RecordSchema);