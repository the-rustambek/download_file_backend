const express = require("express")
const server = express()
const path = require('path')

server.listen(8090, () =>console.log("Server ready at 8090"))

server.set("view engine", "ejs")


server.use(express.json())
server.use(
    express.urlencoded({ 
        extended: true, 
    })
)


server.use(express.static(path.join(__dirname,"public")))

server.get("/",(req,res) =>{
    res.render("index",{
        data,
    })
})

server.post("/",(req,res) =>{
    console.log(req.body);
})