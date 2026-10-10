const mongoose=require("mongoose");

const dbconnect=async()=>{
    try{
        await mongoose.connect(process.env.MongodbUrl);
        console.log("dbconnected")
    }
    catch(err){
        console.log("DB error",err.message)
    }

}
module.exports=dbconnect;