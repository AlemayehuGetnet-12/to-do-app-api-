const express=require("express");
const router=express.Router();

const Task=require("../models/Task");

router.put("/update/:id",async(req,res)=>{

const task=await Task.findByIdAndUpdate(

req.params.id,

req.body,

{new:true}

);

res.json({

message:"Updated",

task

});

});

module.exports=router;