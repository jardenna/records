const express = require('express');
const { compare, hash } = require('bcrypt');


const User = require('../models/UserModel');


const { createAccessToken, createRefreshToken, sendAccessToken, sendRefreshToken } = require('../token');
const router = express.Router();


//Delete User by Id
router.delete('/:userId', async (req, res) => {
   const { userId } = req.params;
   try {
      await User.deleteOne({ _id: userId });
      res.status(200).json({
         message: 'User was deleted succesfully'
      });
   } catch (error) {
      res.status(500).json({
         error
      });
   }
});




//Get all users
router.get('/', async (req, res) => {

   try {
      const user = await User.find();
      res.json(user);
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


//Add new user
router.post('/signup', async (req, res) => {

   const { name, email, password } = req.body;

   const hashedPassword = await hash(password, 10);

   try {
      const user = await User.find({ email });

      if (user.length > 0) {
         return res.status(409).json({
            message: 'User already exists'
         });
      } else {
         const user = new User({
            name,
            email,
            password: hashedPassword
         });
         await user.save();

      }

      res.status(200).json({
         message: 'User was created succesfully'
      });

   } catch (error) {

      res.status(500).json({
         message: `Signup failed ${error.message}`,
         error
      });
   }

});

//Login
router.post('/login', (req, res) => {
   const { email, password } = req.body;
   const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

   User.find({ email })
      .then(user => {
         //Does the user exist
         if (!email) {
            return res.status(401).json({
               message: 'Email must be provided'
            });
         }

         if (!validEmail.test(email)) {
            return res.status(422).json({
               message: 'Invalid email address'
            });

         }

         if (!password) {
            return res.status(401).json({
               message: 'Password must be provided'
            });
         }


         if (user.length === 0) {
            return res.status(401).json({
               message: 'User does not exist'
            });
         }



         compare(password, user[0].password, (error, result) => {

            if (error) {
               return res.status(401).json({
                  message: 'Auth failed'
               });
            }
            if (result) {
               const accessToken = createAccessToken(user[0]._id);


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

//Logout a user

router.post('/logout', (_req, res) => {
   res.clearCookie('refreshToken');

   return res.send({
      message: 'logged out'
   });
});


module.exports = router;