const express=require("express")
const mongoose =require("mongoose")

const blogRoutes=require("./routes/blogRoutes")
const app=express();

const dbUrl="mongodb+srv://blog98:@1998Doshi@cluster0-dlbb4.mongodb.net/nodeblog?retryWrites=true&w=majority"

mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{
    app.listen(3000);
})
.catch((err)=>{
    console.log(err)
})
app.set("view engine","ejs")



app.use(express.static("public"))

// this is middleware use for getting form data 
app.use(express.urlencoded({extended:true}))

// app.get("/add-blog",(req,res)=>{
//     const blog=new Blog({
//         title:"new blog2",
//         snippet:"about my new blog",
//         body:"more about my blog"
//     })
//     blog.save()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })

// app.get("/all-blogs",(req,res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })

//  app.get("/single-blog",(req,res)=>{
//      Blog.findById("5eff53fadccbfc51672620fd")
//      .then((result)=>{
//          res.send(result)
//      })
//      .catch((err)=>{
//          console.log(err)
//      })
//  })


app.get("/",(req,res)=>{
    // const blogs=[
    //     {title:"Lorem Ipsum is simply dummy text .",snippet:"It is a long established fact that a reader will b"},
    //     {title:"Lorem Ipsum is simply dummy text .",snippet:"It is a long established fact that a reader will b"},
    //     {title:"Lorem Ipsum is simply dummy text .",snippet:"It is a long established fact that a reader will b"}
        
    // ]

    res.redirect("/blogs")
})


app.get("/about",(req,res)=>{

    res.render("about",{title:"about"})
})



app.use("/blogs",blogRoutes);

app.use((req,res)=>{
    res.status(404).render("404",{title:"Page NOt found"})
})



