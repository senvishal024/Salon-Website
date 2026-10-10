const mongoose=require("mongoose");

const ServicesSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        default:"active"
    }
})
module.exports=mongoose.model("service",ServicesSchema);