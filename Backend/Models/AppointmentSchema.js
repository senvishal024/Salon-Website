const mongoose=require("mongoose");

const AppointmentSchema= mongoose.Schema({  
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    service:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    message:{
        type:String,
    },
    status:{
        type:String,
        enum:["pending","confirmed","cancelled","completed"],
        default:"pending"
    }

})
module.exports=mongoose.model("appointment",AppointmentSchema);