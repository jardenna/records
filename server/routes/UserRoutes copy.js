const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/UserModel');
const router = express.Router();



//Get all users
router.get('/', async (req, res) => {

   try {
      const post = await User.find();
      res.json(post);
   } catch (error) {
      res.json({ 'message': error });
   }

});

//Get user by id
router.get('/:userId', async (req, res) => {

   try {
      const user = await User.findById(req.params.userId);
      res.json(user);
   } catch (error) {
      res.json({ 'message': error });
   }

});

//Delete User by Id
router.delete('/:userId', (req, res) => {
   User.deleteOne({ _id: req.params.userId })
      .then(() => {
         res.status(200).json({
            message: 'User was deleted succesfully'
         });
      })
      .catch(error => {
         res.status(500).json({
            error
         });
      });
});


//Add new user
router.post('/signup', (req, res) => {

   User.find({ email: req.body.email })
      .then(user => {
         if (user.length > 0) {
            return res.status(409).json({
               message: 'User already exists'
            });
         } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {

               if (err) {
                  return res.status(500).json({
                     error: err,
                     message: '1213'
                  });
               } else {
                  const user = new User({
                     name: req.body.name,
                     email: req.body.email,
                     password: hash
                  });

                  user.save()
                     .then(() => {
                        res.status(201).json({
                           message: 'User created'
                        });
                     })
                     .catch(error => {

                        res.status(500).json({
                           message: '123',
                           error
                        });
                     });
               }
            });
         }
      });

});



//Login
router.post('/login', (req, res) => {

   User.find({ email: req.body.email })
      .then(user => {
         //Does the user exist
         if (user.length > 1) {
            return res.status(401).json({
               message: 'Auth failed'
            });
         }
         bcrypt.compare(req.body.password, user[0].password, (error, result) => {

            if (error) {
               return res.status(401).json({
                  message: 'Auth failed'
               });
            }
            if (result) {
               const accessToken = jwt.sign({
                  email: user[0].email,
                  id: user[0]._id
               },
                  process.env.ACCESS_TOKEN_SECRET,
                  {
                     expiresIn: '1h'
                  }
               );

               return res.status(200).json({
                  message: 'Login Succeeded',
                  accessToken
               });
            }

            return res.status(401).json({
               message: 'Invalid password'
            });
         });

      })
      .catch(() => {

         return res.status(401).json({
            message: 'Invalid email'
         });
      });
});



module.exports = router;