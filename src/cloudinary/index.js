const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const {CloudinaryStorage}=require('multer-storage-cloudinary');
const { all } = require('../routes/user.routes');


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'CategoryLogos',
        allowed_formats: ['jpg', 'png', 'jpeg']
    }
})

module.exports= {cloudinary, storage}