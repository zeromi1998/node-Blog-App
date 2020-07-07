const express=require("express")

const blogController=require("../controller/blogControl")
//creating instance of Router
const router=express.Router();




router.get("/create",blogController.blogCreateGet);


router.get("/",blogController.blog_index);



router.post("/",blogController.blogCreatePost);

router.get("/:id1",blogController.blogDetail);

router.delete("/:id1",blogController.blogDelete);

module.exports=router;