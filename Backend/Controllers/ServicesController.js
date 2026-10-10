const express=require("express");
const ServicesSchema = require("../Models/ServicesSchema");
const { error } = require("node:console");

const addServices=async (req,res)=>{
    const {name,category,price,description}=req.body;
    console.log("req.body",req.body)
    const newService=await ServicesSchema.create({
        name,
        category,
        price,
        description
    });
    res.json({message:"Service added",newService});
}
const updateService=async (req,res)=>{
    const {id}=req.params;
    const service=req.body;
    const updateService=await ServicesSchema.findByIdAndUpdate(id,service,{return:"after"});
    res.json(updateService);
}
const showServices=async (req,res)=>{
    const service=await ServicesSchema.find();
    res.json(service);
}
 const showService=async (req,res)=>{
    try{
    const {id}=req.params;
    const service=await ServicesSchema.findById(id);
    res.json(service)
    }
    catch(err){
        res.json({
            message:"Error",
            error:err.message
        })
    }
}
module.exports={addServices,showServices,updateService ,showService};