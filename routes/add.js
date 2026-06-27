const express=require("express");
const router=express.Router();

const Task=require("../models/Task");

router.post("/add",async(req,res)=>{

const task=new Task({

title:req.body.title

});

await task.save();

res.json({

message:"Task Added",

task

});

});

module.exports=router;