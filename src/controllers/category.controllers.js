const Category= require("../models/category.model")

const createCategory=async(req,res)=>{
    //console.log("hello")
    try{
        const{name,active,logo}=req.body
        if(!req.file){
          return  res.status(400).json({
                error:"Logo image requireddd"
            })
        }
const response= await Category.create({
    name,
    active,
    logo:req.file.path,
})
res.status(201).json({ 
    success: true,
      data: response,})
}
catch(error){
    res.status(400).json({error:error.message}

    )}
}


const showCategory=async()=>{
    
}
module.exports = {
  createCategory
};