const express=require("express");
const jwt=require("jsonwebtoken");
const AdminSchema=require("../Models/AdminModel")

const { json } = require("node:stream/consumers");

const isLoggedIn = async (req, res, next) => {
    try {
        console.log("MIDDLEWARE HIT");

        const token = req.header("authorization");
        console.log("TOKEN:", token);

        if (!token) {
            return res.status(401).json({
                message: "token not found"
            });
        }

        const decoded = jwt.verify(token, "secret");

        const admin = await AdminSchema.findById(decoded.id);

        if (!admin) {
            return res.status(404).json({
                message: "user not found"
            });
        }

        req.admin = admin;

        next();

    } catch (err) {
        console.log("AUTH ERROR:", err.message);

        return res.status(401).json({
            message: "Invalid token"
        });
    }
};
module.exports=isLoggedIn;