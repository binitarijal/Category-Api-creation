const express= require('express')
const router= express.Router();
const upload= require("../middlewares/upload")
const {createCategory, showCategory, updateCategory, deleteCategory}= require("../controllers/category.controllers")
/**
 * @swagger
 * /api/v1/category:
 *   post:
 *     summary: Create category
 *     tags: [Category]
 */
router.post("/",upload.single("logo"),createCategory)
router.get("/",showCategory)
router.put("/:id",upload.single("logo"),updateCategory)
router.delete("/:id",upload.single("logo"),deleteCategory)

module.exports=router;