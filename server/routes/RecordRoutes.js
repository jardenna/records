const express = require('express');
//const path = require('path');
//const multer = require('multer');
const Record = require('../models/RecordsModel');
const router = express.Router();

const utils = require('../utils');


// Get all records
router.get('/', async (_, res) => {

   try {
      const allRecords = await Record.find().sort([['date', -1]]);
      res.json(allRecords);
   } catch (error) {
      res.json({ 'message': error });
   }

});

//Get record by Id
router.get('/:recordId', async (req, res) => {
   try {
      const record = await Record.findById(req.params.recordId);
      res.json(record);
   } catch (error) {
      res.json({ 'message': error });
   }

});

// const storage = multer.diskStorage({
//    destination: './server/public/uploads/',
//    filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//    }
// });

// const upload = multer({
//    storage: storage,
//    limits: { fileSize: 1000000 },
//    fileFilter: (req, file, cb) => {
//       utils.checkFileType(file, cb);
//    }
// });

//Add new record
router.post('/', utils.upload.single('photo'), (req, res) => {

   const file = req.file ? req.file.filename : '';
   const record = new Record({
      artist: req.body.artist,
      title: req.body.title,
      prodYear: req.body.prodYear,
      label: req.body.label,
      origin: req.body.origin,
      price: req.body.price,
      recordNum: req.body.recordNum,
      numOfRecords: req.body.numOfRecords,
      released: req.body.released,
      info: req.body.info,
      photo: file
   });

   record.save()
      .then(data => {
         res.json(data);
      })
      .catch(err => {
         res.json({ message: err });
      });
});

module.exports = router;