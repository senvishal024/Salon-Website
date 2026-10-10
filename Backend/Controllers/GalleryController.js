const { error } = require("node:console");
const cloudinary=require("../Config/cloudinary");
const GallerySchema=require("../Models/GalleryModel")
const { Readable } = require("node:stream");

const ImageUpload=async (req,res)=>{
    try{
        console.log("FILE",req.file);
        const stream=cloudinary.uploader.upload_stream(
            {
                folder:"salon-gallery"
            },
            async (error,result)=>{
                if(error){
                    console.log("Cloudinary error",error);c
                    return res.json({
                        message:"Cloudinary upload faild",
                        error:error.message
                    });
                }
                const imageUrl=result.secure_url;
                const publicId=result.public_id;

                const gallery=await GallerySchema.create({
                    imageUrl,
                    publicId
                })
                return res.json({
                    message:"image uploaded and save sucessfully",
                    gallery
                });
            }
        );
        Readable.from(req.file.buffer).pipe(stream);
    }
    catch(err){
        res.json({
            message:"Error",
            error:err.message
        })
    }
}
const ShowGallery=async (req,res)=>{
    try{
        const totalImage=await GallerySchema.countDocuments();
        const gallery=await GallerySchema.find().sort({createdAt:-1});
        res.json({gallery,totalImage});
    }
    catch(err){
        res.json({
            message:"Error",
            error:err.message
        })
    }
}
const DeleteImage=async (req,res)=>{
    try{
        const {id}=req.params;
        const gallery=await GallerySchema.findById(id);
        if(!gallery){
            return res.json({
                message:"Error",
                error:err.message
            })
        }
        const result=await cloudinary.uploader.destroy(gallery.publicId)
        console.log("cloudinary delete",result)
        if(result.result !=="ok" && result.result!=="not found"){
            return res.status(500).json({
                message: "Cloudinary image delete failed"
            });
        }
        await GallerySchema.findByIdAndDelete(id);
        return res.json({
            message:"image deleted"
        })
    }
    catch(err){
        res.json({
            message:"Error",
            error:err.message
        })
    }
}

module.exports={ImageUpload,ShowGallery,DeleteImage};