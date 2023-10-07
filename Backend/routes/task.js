const Task=require('../models/Task');

const router=require("express").Router();

//Create

router.post("/",async(req,res)=>{
    const newTask=new Task({
        text:req.body.text,
    })

    try{
        const savedTask=await newTask.save()
        res.status(200).json(savedTask)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Delete

router.delete("/:id",async(req,res)=>{
    try{
        await Task.findByIdAndDelete(req.params.id)
        res.status(200).json("Task successfully deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GetTask

router.get("/:id",async(req,res)=>{
    try{
        const getTask=await Task.findById(req.params.id)
        res.status(200).json(getTask)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GetAll

router.get("/",async(req,res)=>{
    try{
        const allTasks=await Task.find()
        res.status(200).json(allTasks)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router; 