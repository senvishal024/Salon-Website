const express=require("express");
const cors=require("cors");
const dbconnect = require("./Config/Db-connection");
const {router, clientRouter}= require("./Routes/SalonRoutes");
const isLoggedIn = require("./Middleware/isLogedIn");
const app=express();
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
require("dotenv").config();

const PORT=process.env.PORT;
dbconnect();
app.use("/admin",router);
app.use("/newgeneration",clientRouter)
app.get("/",(req,res)=>{
    res.send("Hello Server");
});

app.listen(PORT,()=>{
    console.log(`Server running on : localhost:${PORT}`)
});