
const blogSchema= require('../model/blogSchema');

const createBlogPost=async(req, res) => {
    try{
    // Logic to create a blog post
     const {title,body,author}=await blogSchema.create(req.body);

    res.status(201).send({
        title: title,
        body: body,
        author: author, 
        message: "Blog post created successfully" });
}
catch (error) {
    res.status(500).send({ error: "An error occurred while creating the blog post" });
}
}
const getBlogPosts=async(req, res) => {
    try{
    // Logic to get all blog posts
    const blog=await blogSchema.find({});
    if (!blog || blog.length === 0) {
        return res.status(404).send({ error: "No blog posts found" });
    }
    res.status(200).send({
        blogs: blog,
        message: "Blog posts fetched successfully"
    });
}
catch (error) {
    res.status(500).send({ error: "An error occurred while fetching blog posts" });
}
}
const getBlogPostById=async(req, res) => {
    try{
    const blog=await blogSchema.findById(req.params.id);
    if (!req.params.id) {
        return res.status(400).send({ error: "Blog post ID is required" });
    }

    if (!blog) {
        return res.status(404).send({ error: "Blog post not found" });
    }
    res.status(200).send({
        blog: blog,
        message: "Blog post fetched successfully"
    });
}
    catch (error) {
        res.status(500).send({ error: "An error occurred while fetching the blog post" });
    }
}
const updateBlogPost=async(req, res) => {
    try{
        const blog=await blogSchema.findByIdAndUpdate(req.params.id,req.body, { new: true });
        res.status(200).send({
            message: "Blog post updated successfully",
            blog: blog
    });

}
catch(err){
    res.status(500).send({ error: "An error occurred while updating the blog post" });
}
}

const deleteBlogPost=async(req,res)=>{
 try{
   const blog=await blogSchema.findByIdAndDelete(req.params.id);
   res.status(200).send(
    {
        blog: blog,
        message: "Blog post deleted successfully"
    }
   ) 
}
 catch(err){
   res.status(500).send({ error: "An error occurred while deleting the blog post" });
 }
}

module.exports={
    createBlogPost,
    getBlogPosts,
    getBlogPostById,
    updateBlogPost,
    deleteBlogPost
}