const express = require('express')
const { registerUser, userLogin } = require('../controllers/user.controller')
const router = express.Router()

/**
 * @swagger
 * /api/v1/register:
 *   post:
 *     summary: Register user
 *     tags: [Auth]
 */

router.post("/register", registerUser)

/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 */
router.post("/login", userLogin)

module.exports = router
