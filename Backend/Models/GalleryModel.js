const mongoose=require("mongoose");


const GallerySchema=mongoose.Schema({
    imageUrl:{
        type:String,
        required:true
    },
    publicId:{
        type:String,
        required:true
    }
},
{
    timeStamps:true
}
)
module.exports=mongoose.model("gallery",GallerySchema);