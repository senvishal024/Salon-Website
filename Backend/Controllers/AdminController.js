const express=require("express");
const AdminSchema=require("../Models/AdminModel")
const bcrypt =require("bcryptjs")
const jwt=require("jsonwebtoken")
const AdminRegister=async (req,res)=>{
    try{
        const {email,password,phone,name}=req.body;
        const hashpass=await bcrypt.hash(password,10);
        const findemail=await AdminSchema.findOne({email});
        if(findemail){
           return res.json("Already Registered");
        }
        else{

        
        const admin=await AdminSchema.create({
            name,phone,email,password:hashpass
        })
            console.log(admin)
        return res.json({message:"Registered sucessfully",
            admin
        })
        }
    }
    catch(err){
        res.json({
            message:"Error",
            error:err.message
        })
    }
}
const AdminLogin=async (req,res)=>{
    const {email,password}=req.body;
    const findemail= await AdminSchema.findOne({email});
    if(!findemail){
        return res.json("Invalid email")
    }
    const findpasss=await bcrypt.compare(password,findemail.password);
    if(!findpasss){
        return res.json("invalid password");
    }
    const token =await jwt.sign({id:findemail._id},"secret");
    res.json({
        message:"Login Succesfully",
        token
    })
}
const ShowDetail=async (req,res)=>{
    const admin=await AdminSchema.findOne().select("-password");
    res.json(admin);
}
const UpdateAdmin=async (req,res)=>{
    const {email,name,phone}=req.body;
    const newDetails=await AdminSchema.findOneAndUpdate({email},{name,phone},{new:true});
    res.json(newDetails);
}
const passwordChange = async (req, res) => {
    try {
         console.log("PASSWORD CONTROLLER HIT");
        const { newpassword, oldpassword } = req.body;

        const admin = req.admin;

        console.log("ADMIN:", admin);
        console.log("OLD PASSWORD:", oldpassword);
        console.log("NEW PASSWORD:", newpassword);

        const verifyPassword = await bcrypt.compare(
            oldpassword,
            admin.password
        );

        if (!verifyPassword) {
            return res.json("password is incorrect");
        }

        const newPass = await bcrypt.hash(newpassword, 10);

        admin.password = newPass;

        await admin.save();

        return res.json({
            message: "Password changed successfully"
        });
    }
    catch (err) {
        console.log("PASSWORD CHANGE ERROR:", err);

        return res.status(500).json({
            message: "Error",
            error: err.message
        });
    }
};
module.exports={AdminRegister,AdminLogin,ShowDetail,UpdateAdmin ,passwordChange};