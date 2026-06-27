const express=require("express");
const router=express.Router();

const Task=require("../models/Task");

router.get("/edit/:id",async(req,res)=>{

const task=await Task.findById(req.params.id);

res.json(task);

});

module.exports=router;