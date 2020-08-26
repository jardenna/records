const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   date: {
      type: Date,
      default: Date.now
   }

});



//Posts = the name in Mongoodb
module.exports = mongoose.model('Records', PostSchema);