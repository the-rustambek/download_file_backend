const router = require("express").Router();
const data = require("../modules/database")
const fs = require('fs/promises')
const path = require("path")
const expressFileUpload = require("express-fileupload")

const database = path.join(__dirname, "..", "database.json")

router.post("/", async (req, res) => {
    let data = await fs.readFile(database, "UTF-8")
    data = await JSON.parse(data)
    data = await data.find((e) => e.password == req.body.password)
    // console.log(req.body.password)
    let fileName = data["filename"]
    // console.log(fileName)
    let filePathData = path.join(__dirname, "public", "files", fileName)
    // console.log(filePathData)
    res.download(filePathData)
    res.redirect("/")
})

module.exports = router;