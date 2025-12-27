const express=require('express');
const app=express()
require("dotenv").config();
const connectDB=require('./src/config/db.config')

const categoryRoutes= require("./src/routes/category.routes");
const { showCategory } = require('./src/controllers/category.controllers');

connectDB()

app.use(express.json())//middleware to read json
app.use("/uploads", express.static("uploads"));


PORT=process.env.PORT || 5500

app.use('/api/v1/category',categoryRoutes,);





app.get('/',(req,res)=>{
    res.send("woowoowooo hommeeee")
})
app.listen(5000,(req,res)=>{
    console.log(`port running ${PORT}`)
})