const express= require('express')
const router= express.Router();
const upload= require("../middlewares/upload")
const {createCategory, showCategory, updateCategory}= require("../controllers/category.controllers")

router.post("/",upload.single("logo"),createCategory)
router.get("/",showCategory)
router.put("/:id",upload.single("logo"),updateCategory)

module.exports=router;