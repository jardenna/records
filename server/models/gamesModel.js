const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   cover: {
      type: String,
      required: true
   },
   date: {
      type: Date,
      default: Date.now
   }
});

module.exports = mongoose.model('Games', GameSchema);