const express = require('express');

const Record = require('../models/Records');

const router = express.Router();

router.get('/', (req, res) => {
   res.send('we are records');
});



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