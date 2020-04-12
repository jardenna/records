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
   prodYear: Number,
   label: String,
   origin: String,
   price: mongoose.Schema.Types.Decimal128,
   recordNum: String,
   numOfRecords: Number,
   released: String,
   date: {
      type: Date,
      default: Date.now
   }

});


module.exports = mongoose.model('Records', RecordSchema);