const express = require("express")
var router = express.Router();
const blogController=require("../controllers/blogController")


router.post("/postblog",blogController.saveBlog)
router.get("/getblog",blogController.getallBlogs)
router.get("/getblogbyid/:blogid",blogController.getBlogById)
router.patch("/edit/:blogid",blogController.updateBlog)
router.delete("/deleteblog/:blogid",blogController.deleteBlog)

module.exports=router
