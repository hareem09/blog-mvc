const express=require('express')
const router=express.Router()
const { createBlogPost,
       getBlogPosts,
       getBlogPostById,
       updateBlogPost,
       deleteBlogPost } = require('../controller/blog');
  
// Route to create a new blog post
router.post('/blogs', createBlogPost);
// Route to get all blog posts
router.get('/blogs', getBlogPosts);
// Route to get a blog post by ID
router.get('/blog/:id', getBlogPostById);
// Route to update a blog post by ID
router.put('/blog/:id', updateBlogPost);
// Route to delete a blog post by ID
router.delete('/blog/:id', deleteBlogPost);
// Export the router
module.exports = router;