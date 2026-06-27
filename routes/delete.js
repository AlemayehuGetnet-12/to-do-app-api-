const express=require("express");
const router=express.Router();

const Task=require("../models/Task");

router.delete("/delete/:id",async(req,res)=>{

await Task.findByIdAndDelete(req.params.id);

res.json({

message:"Task Deleted"

});

});

module.exports=router;