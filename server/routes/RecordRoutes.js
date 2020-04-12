const express = require('express');

const Record = require('../models/RecordsModel');
const router = express.Router();


// Get all records
router.get('/', async (_, res) => {

   try {
      const allRecords = await Record.find();
      res.json(allRecords);
   } catch (error) {
      res.json({ 'message': error });
   }

});

//Get record by Id
router.get('/:recordId', async (req, res) => {
   try {
      const record = await Record.findById(req.params.postId);
      res.json(record);
   } catch (error) {
      res.json({ 'message': error });
   }

});


//Add new record
router.post('/', (req, res) => {
   const record = new Record({
      title: req.body.title,
      description: req.body.description
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