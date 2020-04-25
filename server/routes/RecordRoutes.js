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
      recordNo: req.body.recordNo,
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

//Delete Record
router.delete('/delete/:recordId', async (req, res) => {
   try {
      const removedPost = await Record.deleteOne({ _id: req.params.recordId });
      res.json(removedPost);
   } catch (error) {
      res.json({ 'message': error });
   }

});



//Update record
router.patch('/:recordId', async (req, res) => {
   try {
      const file = req.file ? req.file.filename : '';

      const updatedPost = await Record.findOneAndUpdate(
         { _id: req.params.recordId },
         { updatedExisting: true },
         {
            $set: {
               artist: req.body.artist,
               title: req.body.title,
               prodYear: req.body.prodYear,
               label: req.body.label,
               origin: req.body.origin,
               price: req.body.price,
               recordNo: req.body.recordNo,
               numOfRecords: req.body.numOfRecords,
               released: req.body.released,
               info: req.body.info,
               photo: file
            }
         }
      );
      res.json(updatedPost);
   } catch (error) {
      res.json({ 'message': error });
   }

});
module.exports = router;