const express = require("express")
const server = express()
const path = require('path')
const expressFileUpload = require("express-fileupload")
const homeRoute = require("./Routes/homeRoute")
const jonatishRouter = require("./Routes/jonatishRouter")
const yuklabOlishRouter = require("./Routes/yuklabOlishRouter")
const data = require("./modules/database")

const PORT = process.env.PORT || 4400;
server.listen(PORT, () => console.log("Server ready at 8090"))

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
server.use("/jonatish", jonatishRouter)
server.use("/yuklabOlish", yuklabOlishRouter)











