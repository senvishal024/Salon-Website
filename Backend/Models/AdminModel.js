const mongoose= require("mongoose");
const  AdminSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model("Admin",AdminSchema);