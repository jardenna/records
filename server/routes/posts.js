const express = require('express');

const Post = require('../models/Post');

const router = express.Router();

// Get all posts
router.get('/', (req, res) => {
   Post.find()
      .then(data => res.json(data))
      .catch(
         error => res.json(error)
      );
});


//Get post by Id
router.get('/:postId', async (req, res) => {
   try {
      const post = await Post.findById(req.params.postId);
      res.json(post);
   } catch (error) {
      res.json({ 'message': error });
   }

});

//Delete post
router.delete('/:postId', async (req, res) => {
   try {
      const removedPost = await Post.deleteOne({ _id: req.params.postId });
      res.json(removedPost);
   } catch (error) {
      res.json({ 'message': error });
   }

});

//Update post
// router.patch('/:postId', async (req, res) => {
//    try {
//       const updatedPost = await Post.updateOne({ _id: req.params.postId });
//       res.json(updatedPost);
//    } catch (error) {
//       res.json({ 'message': error });
//    }

// });

//Post a new post
router.post('/', async (req, res) => {
   try {
      const post = await new Post({
         title: req.body.title,
         description: req.body.description
      });

      post.save()
         .then(data => {
            console.log('Data has been saved');
            res.json(data);
         })
         .catch(err => {
            res.json({ message: err });
         });
   } catch (error) {
      res.json({ 'message': error });
   }

});


module.exports = router;