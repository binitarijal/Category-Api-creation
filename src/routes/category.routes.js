const express= require('express')
const router= express.Router();
const upload= require("../middlewares/upload")
const {createCategory}= require("../controllers/category.controllers")

router.post("/",upload.single("logo"),createCategory)

module.exports=router;