const Blog=require("../models/blog")

const blog_index=(req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        res.render("index",{title:"All Blogs",blogs:result})
    })
    .catch((err)=>{
        console.log(err)
    })

}


const blogDetail=(req,res)=>{
    const id=req.params.id1;
    console.log(id);
    Blog.findById(id) 
    .then((result)=>{
      res.render("details",{blog:result,title:"Blog Deatils"})
    })
    .catch(err=>{
        res.status(404).render("404",{title:"Blog not Found"})
    })
}

const blogCreateGet=(req,res)=>{
    res.render("create",{title:"Create New Blog"})
}

const blogCreatePost=(req,res)=>{
    const blog = new Blog(req.body)
    blog.save()
    .then((result)=>{
        res.redirect("/blogs")
    })
    .catch((err)=>{
        console.log(err)
    })
}

const blogDelete=(req,res)=>{
    const id=req.params.id1
    Blog.findByIdAndDelete(id)
    .then(result=>{
        res.json({redirect:"/blogs"});
    })
    .catch(err=>{
        console.log(err);
    })
}

module.exports={
    blog_index,
    blogDetail,
    blogCreateGet,
    blogCreatePost,
    blogDelete
}