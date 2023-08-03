const express = require("express")
const { getAllBlogController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogController, userBlogController } = require("../controllers/blogController")

//router object
const router = express.Router()

//routes
//show all blog
router.get("/all-blog",getAllBlogController)
//create blog
router.post("/create-blog",createBlogController)
//update blog
router.put("/update-blog/:id",updateBlogController)
//get single blog
router.get("/get-blog/:id",getBlogByIdController)
//delete single blog
router.delete("/delete-blog/:id",deleteBlogController)

//user blog
router.get("/user-blog/:id",userBlogController)

module.exports = router