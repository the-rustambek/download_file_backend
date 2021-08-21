const router = require("express").Router();
const expressFileUpload = require("express-fileupload")
const path = require("path")
const data = require("../modules/database")

router.get("/",(req,res) =>{
    res.render(path.join("index"))
})

module.exports = router;