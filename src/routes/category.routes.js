const express= require('express')
const router= express.Router();
//const upload= require("../middlewares/upload")
const {storage}= require("../cloudinary/index")
const multer= require("multer")
const {createCategory, showCategory, updateCategory, deleteCategory}= require("../controllers/category.controllers")

const upload= multer({storage: storage})

/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Category management APIs
 */


/**
 * @swagger
 * /api/v1/category:
 *   post:
 *     summary: Create a new category
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - logo
 *             properties:
 *               name:
 *                 type: string
 *                 example: Electronics
 *               active:
 *                 type: boolean
 *                 example: true
 *               logo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Category already exists or logo missing
 */
router.post("/",upload.single("logo"),createCategory)
/**
 * @swagger
 * /api/v1/category:
 *   get:
 *     summary: Get all categories
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: List of categories
 *       400:
 *         description: Error fetching categories
 */

router.get("/",showCategory)

/**
 * @swagger
 * /api/v1/category/{id}:
 *   put:
 *     summary: Update category
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Category ID
 *     requestBody:
 *       required: false
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Mobiles
 *               active:
 *                 type: boolean
 *                 example: false
 *               logo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Category updated successfully
 *       404:
 *         description: Category not found
 */
router.put("/:id",upload.single("logo"),updateCategory)

/**
 * @swagger
 * /api/v1/category/{id}:
 *   delete:
 *     summary: Delete category
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Category ID
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 */
router.delete("/:id",upload.single("logo"),deleteCategory)

module.exports=router;