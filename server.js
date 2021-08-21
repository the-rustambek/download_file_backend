const express = require("express")
const server = express()
const path = require('path')
const expressFileUpload = require("express-fileupload")
const homeRoute = require("./Routes/homeRoute")
const jonatishRouter = require("./Routes/jonatishRouter")
const yuklabOlishRouter = require("./Routes/yuklabOlishRouter")
const data = require("./modules/database")

server.listen(4444, () => console.log("Server ready at 8090"))

server.set("view engine", "ejs")



server.use(express.json())
server.use(
    express.urlencoded({
        extended: true,
    })
)


server.use(express.static(path.join(__dirname, "public")))

server.get("/", (req, res) => {
    res.render(path.join("index"))
})

server.use("/", homeRoute) 
server.use("/jonat", jonatishRouter)
server.use("/yuklabOl", yuklabOlishRouter)


server.post("/",expressFileUpload(),(req,res)=>{
    req.files.file.mv(path.join(__dirname, "public","files",req.files.file.name))
    data.push({
        ...req.body,
        filename: req.files.file.name,
    })
    res.redirect("/");
})





















// server.post("/",expressFileUpload(),(req,res) =>{
//     console.log(req.body);
//     data.push(req.body)
//     res.redirect("/")
//     // console.log(req.body);
// })


// server.get("/admin", (req,res) =>{
//     res.render("index",{
//         data,
//     })
// })