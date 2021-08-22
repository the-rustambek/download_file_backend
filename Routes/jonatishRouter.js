const router = require("express").Router();
const data = require("../modules/database")
const expressFileUpload = require("express-fileupload")
const path = require("path")
const fs = require('fs/promises');

const filePath = path.join(__dirname,"..","public/files")



router.post("/",expressFileUpload(),async (req,res)=>{
    
    const databasePath = path.join(__dirname, "..", "database.json");
    let readFile = await fs.readFile(databasePath,"UTF-8");
    readFile = await JSON.parse(readFile);

    readFile.push({
        password: req.body.password,
        file: req.files.file.name,
    });
    await fs.writeFile(databasePath,JSON.stringify(
        readFile,)
    )


    req.files.file.mv(path.join("public", "files", req.files.file.name))  
    res.redirect("/")
    // req.files.file.mv(path.join(__dirname, "public","files",req.files.file.name))
    // data.push({
    //     ...req.body,
    //     filename: req.files.file.name,
    // })
    // console.log(req.files.file.name,req.body.password);
    
})



module.exports = router;