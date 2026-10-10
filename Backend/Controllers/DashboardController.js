const express=require("express");
const AppointmentSchema = require("../Models/AppointmentSchema");
const ServicesSchema = require("../Models/ServicesSchema");
const { error } = require("node:console");

const Dashboard=async (req,res)=>{
    const totalAppointment=await AppointmentSchema.countDocuments();
    const totalPending=await AppointmentSchema.countDocuments({status:"pending"});
    const totalComplete=await AppointmentSchema.countDocuments({status:"completed"});
    const totalServices=await ServicesSchema.countDocuments();
    const activeServices=await ServicesSchema.countDocuments({status:"active"});
    res.json({
        totalAppointment,totalPending,totalComplete,totalServices,activeServices
    })
}
const CustomerShow=async (req,res)=>{
    try{
        const customers =await AppointmentSchema.aggregate([
            {
                $sort:{
                    date:-1
                }
            },
           { $group:{
                _id:"$email",
                name:{$first:"$name"},
                phone:{$first:"$phone"},
                email:{$first:"$email"},
                lastVisit:{$first:"$date"},
                totalAppointment:{$sum:1}
            }
            }
        
    ]);
    const totalCustomers=await AppointmentSchema.aggregate([
        {
            $group:{
                _id:"$email"
            }
        },
        {
            $count:"totalCustomer"
        }
    ])
    const startOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
);

const startOfNextMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    1
);

const result = await AppointmentSchema.aggregate([
    {
        $sort: { date: 1 }
    },
    {
        $group: {
            _id: "$email",
            firstAppointment: { $first: "$date" }
        }
    },
    {
        $match: {
            firstAppointment: {
                $gte: startOfMonth,
                $lt: startOfNextMonth
            }
        }
    },
    {
        $count: "newCustomers"
    }
]);

const newCustomers = result[0]?.newCustomers || 0;
    res.json({customers,totalCustomers,newCustomers});
    }
    catch(err){
        res.json({
            message:"Error",
            error:err.message
        })
    }
}


module.exports={Dashboard,CustomerShow};