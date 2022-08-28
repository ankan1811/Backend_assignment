const express = require("express")
var router = express.Router();
const blogreviewController=require("../controllers/blogreviewController")


router.post("/postblogreview",blogreviewController.saveReview)
router.get("/getblogreview",blogreviewController.getallReviews)
router.delete("/deleteblogreview/:blogreviewid",blogreviewController.deleteReview)

module.exports=router