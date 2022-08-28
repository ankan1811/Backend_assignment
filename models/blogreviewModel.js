const mongoose=require("mongoose");


const blogreviewSchema=new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique:true
    },
    description: {
        type: String,
        required: true
    }

},{timestamps:true});

const blogreview = mongoose.model('BlogReview',blogreviewSchema);

module.exports = blogreview;