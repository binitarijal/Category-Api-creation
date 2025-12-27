const Category= require("../models/category.model")

const fs = require("fs");
const path = require("path");

const createCategory=async(req,res)=>{
    //console.log("hello")
    try{
        const{name,active}=req.body
        logo=req.file.path
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


const showCategory=async(req,res)=>{
    try{
    const response = await Category.find();
    res.status(200).json({
        success:true,
        data:response,

    })}
    catch(error){
        res.status(400).json({
            success:false,
            error:error.message
        })

    }
}

const updateCategory=async(req,res)=>{

    try{
    const {id}=req.params
    const{name, active}=req.body
    const response= await Category.findById(id)
    if(!response){
        return res.status(404).json({
            message:"category not found"
        })
    }
    if(name) response.name=name
    if(active !== undefined) response.active=active;
    if(req.file){
        if(response.logo){
            const oldpath= path.join(__dirname,"..",response.logo)
            if(fs.existsSync(oldpath)){
                fs.unlinkSync(oldpath)
            }
            
        }
        response.logo=`uploads/${req.file.filename}`;
    }
    await response.save()
    res.status(200).json({
        message:"Category Updated Successfully",
    })
}
catch(error){
  res.status(500).json({
    message: error.message,
  });
}

}
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    if (category.logo) {
      const imagePath = path.join(__dirname, "..", category.logo);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await Category.findByIdAndDelete(id);

    res.status(200).json({
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};





module.exports = {
  createCategory,
   showCategory,
   updateCategory,
    deleteCategory
}