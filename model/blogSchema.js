const mongodb=require('mongoose')
const blogSchema = new mongodb.Schema({
    title: { 
        type: String,
         required: true 
        },
  body: {
     type: String,
      required: true 
    },
  author: { 
    type: String,
     required: true
     },
}, { timestamps: true });

module.exports = mongodb.model('Blog', blogSchema);