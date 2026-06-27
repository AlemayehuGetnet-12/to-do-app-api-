const express=require("express");
const router=express.Router();

const Task=require("../models/Task");

router.post("/",async(req,res)=>{

try{

const task=new Task({

title:req.body.title

});

await task.save();

res.json(task);

}

catch(err){

res.status(500).json(err);

}

});

module.exports=router;