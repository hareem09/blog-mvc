const express = require('express');
const app= express()
const mongodb=require('./dbs')
const blogRouter = require('./routes/blog');
const blogSchema= require('./model/blogSchema');

app.use(express.json());

const PORT = 3000;

app.use('/api', blogRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})