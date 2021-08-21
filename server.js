const express = require("express")
const server = express()
const path = require('path')
const expressFileUpload = require("express-fileupload")

// const ejsLint = require('ejs-lint');

server.listen(3333, () => console.log("Server ready at 8090"))

server.set("view engine", "ejs")

const data = []

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



server.post("/",expressFileUpload(),(req,res)=>{
    console.log(req.body);
    res.rendirect("/");
})




















// server.get(["/","/index.js"],(req,res) =>{
//     res.render("index",{
//         data,
//     })
// })

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