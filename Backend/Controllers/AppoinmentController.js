const express=require("express");
const AppointmentSchema = require("../Models/AppointmentSchema");
require("dotenv").config();
const sendEmail = require("../Config/email");

const addAppoinment = async (req,res)=>{
    try{
    const {name,email,phone,date,time,message,service}=req.body;
    const details=await AppointmentSchema.create({
        name,email,phone,time,date,message,service
    });
   
await sendEmail(
    email,
    "Appointment Received - Salon",

    `Hello ${name},

Thank you for booking an appointment with us.

We have successfully received your appointment request. Our team will review your request and confirm your appointment shortly.

--------------------------------
APPOINTMENT DETAILS
--------------------------------

Name: ${name}
Service: ${service}
Date: ${date}
Time: ${time}
Phone: ${phone}
Email: ${email}

${message ? `Message: ${message}` : ""}

--------------------------------

STATUS: Pending

Please wait for the confirmation from our team. You will receive another email once your appointment is confirmed.

If you have any questions or need to make any changes, please contact our salon.

Thank you for choosing us.

Best Regards,
Salon Team
`
);

console.log("ADMIN EMAIL:", process.env.Email);
await sendEmail(
    process.env.Email,
    "New Appointment Received",

    `Hello Admin,

A new appointment has been booked on your salon website.

--------------------------------
APPOINTMENT DETAILS
--------------------------------

Customer Name: ${name}
Service: ${service}
Date: ${date}
Time: ${time}

Customer Phone: ${phone}
Customer Email: ${email}

${message ? `Customer Message: ${message}` : ""}

--------------------------------

STATUS: PENDING

Please login to the admin panel to review and manage this appointment.

Regards,
Salon Website
`
);

     res.json(details);
    }
    catch(err){
        res.json({
            message:"Error",
            error:err.message
        })
    }
}
const showAppoinment=async (req,res)=>{
    try{
        const details= await AppointmentSchema.find();
        res.json(details);
    }
    catch(err){
        res.json({
            message:"Error",
            error:err.message
        })
    }
}
const statusUpdate=async (req,res)=>{
    const {status}=req.body;
    const {id}=req.params;
    const detail=await AppointmentSchema.findByIdAndUpdate(id,{status});
    if(!detail){
        return res.json({message:"Appoinment dont found"})
    }
      if (status === "confirmed") {
            await sendEmail(
                detail.email,
                "Appointment Confirmed - Salon",

                `Hello ${detail.name},

Good news! Your appointment has been confirmed.

--------------------------------
APPOINTMENT DETAILS
--------------------------------

Name: ${detail.name}
Service: ${detail.service}
Date: ${detail.date}
Time: ${detail.time}
Phone: ${detail.phone}

--------------------------------

STATUS: CONFIRMED

We look forward to seeing you at our salon.

Thank you for choosing us.

Best Regards,
Salon Team`
            );
        }

        // Cancelled email
        if (status === "canceled") {
            await sendEmail(
                detail.email,
                "Appointment Cancelled - Salon",

                `Hello ${detail.name},

We are sorry to inform you that your appointment has been cancelled.

--------------------------------
APPOINTMENT DETAILS
--------------------------------

Name: ${detail.name}
Service: ${detail.service}
Date: ${detail.date}
Time: ${detail.time}

--------------------------------

STATUS: CANCELLED

If you have any questions or would like to book another appointment, please contact our salon.

Best Regards,
Salon Team`
            );
        }

        res.json({
        message:"Status Updated",
        detail
    })
}
const appointmentDelete=async (req,res)=>{
    const {id}=req.params;
    const appointment=await AppointmentSchema.findByIdAndDelete(id);
    res.json({message:"appoinment delete",appointment});

}
module.exports={addAppoinment,showAppoinment,statusUpdate,appointmentDelete};