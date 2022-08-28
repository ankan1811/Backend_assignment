var  Blog = require('../models/blogModel');


const getallBlogs=async(req,res)=>{
try{
const blogs= await Blog.find({});
res.json(blogs);
}
catch(err)
{
  return  res.status(400).send(err)
}
}
const getBlogById = async(req,res) => {
    try {
        const id=req.params.blogid; 
        const blog = await Blog.findOne({ _id: id });
      res.json(blog);
    } 
    catch (err) {
        return  res.status(400).send(err);
    }
  }
const saveBlog=async(req,res)=>{
    try{
    const title=req.body.title;
    const body=req.body.body;
  
    
    const newBlog=new Blog({
        title:title,
        body:body,
    });
    const savedBlog =await newBlog.save();
    res.json(savedBlog);
  }
  catch(err)
  {
    return  res.status(400).send(err);
  }
}

const updateBlog=async(req,res)=>{
    try{
    const id=req.params.blogid;
    const updatedblog= await Blog.findByIdAndUpdate(id,{$set:{title:req.body.title,body:req.body.body}});
    res.json({"Status" :"Updated"});
  
  }
  catch(err)
  {
    return  res.status(400).send(err);
  }
}

const deleteBlog=async(req,res)=>{
    try{
    const id=req.params.blogid;
    await Blog.remove({_id:id});
    res.json({"Status" :"Deleted"});
  
  }
  catch(err)
  {
    return  res.status(400).send(err);
  }
}


  module.exports = {
     getBlogById,saveBlog,getallBlogs,updateBlog,deleteBlog
  }