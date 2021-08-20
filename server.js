const express = require("express")
const server = express()
const path = require('path')

// const ejsLint = require('ejs-lint');

server.listen(2020, () => console.log("Server ready at 8090"))

server.set("view engine", "ejs")

const data = []

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
    data.push({ 
        id: data.length + 1, 
        name: req.body.name, 
        date: req.body.date,

    })
    res.redirect("/")
    // console.log(req.body);
})

server.get("/delete/:id", (req,res) =>{
    let index =data.findIndex((e) =>( e.id == req.params.id))
    data.splice(index,1)
    res.redirect("/")
})

