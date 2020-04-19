const express = require('express');
const router = express.Router();

const Record = require('../models/RecordsModel');

//Get the first 6 records
router.get('/', async (_, res) => {
   try {
      const latestRecords = await Record.find().sort({ _id: -1 }).limit(6);
      res.json(latestRecords);
   } catch (error) {
      res.status(201).json({ 'message': error });
   }

});

module.exports = router;