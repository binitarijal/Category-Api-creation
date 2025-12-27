const mongoose= require('mongoose')

const categorySchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength:15,
    },
    active:{
        type: Boolean,
        default:true
    },
    // logo:{
    //     type: String,
    //     required:true
    // },
},{timestamps:true})

module.exports=mongoose.model('Category',categorySchema)