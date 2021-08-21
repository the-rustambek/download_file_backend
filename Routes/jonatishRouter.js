const router = require("express").Router();
const data = require("../modules/database")
const expressFileUpload = require("express-fileupload")
const path = require("path")

router.get("/",expressFileUpload(),(req,res) =>{
    req.files.file.mv(path.join("public", "files", req.files.file.name))
    data.push({
        ...req.body, 
        filename: req.files.file.name
    })
    
    res.redirect("/jonatish")

})

router.post("/jonatish")

module.exports = router;