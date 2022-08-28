var  Review = require('../models/blogreviewModel');


const getallReviews=async(req,res)=>{
    try{
    const reviews= await Review.find({});
    res.json(reviews);
    }
    catch(err)
    {
      return  res.status(400).send(err)
    }
    }
const saveReview=async(req,res)=>{
    try{
    const userId=req.body.userId;
    const description=req.body.description;
    
    const newReview=new Review({
        userId:userId,
        description:description
    });
    const savedReview =await newReview.save();
    res.json(savedReview);
  }
  catch(err)
  {
    return  res.status(400).send(err);
  }
}

const deleteReview=async(req,res)=>{
    try{
    const id=req.params.blogreviewid;
    await Review.remove({_id:id});
    res.json({"Status" :"Deleted"});
  
  }
  catch(err)
  {
    return  res.status(400).send(err);
  }
}

  module.exports = {
     deleteReview,saveReview,getallReviews
  }