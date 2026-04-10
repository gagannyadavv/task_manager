import express from "express";
import {taskModel} from '../models/task.model.js'

async function createTask(req,res){
   try {
     const {id , title , completed} = req.body
     if(!id){
         return res.status(400).json({message:"id is required!!"})
     }
     if(!title || typeof title !=="string"){
         return res.status(400).json({message:"Title is required!!"})
     }
     if(completed === undefined){
         return res.status(400).json({message:"Status is required!!"})
     }
     const existingTask = await taskModel.findOne({id:id})
     if(existingTask){
         return res.status(409).json({
             message:"Task with this id already exists!!"
         })
     }
     const task = await taskModel.create({
         id,
         title,
         completed
     })
     res.status(201).json({
         message:"Task created succesfully!!",
         task : task
     })
   } catch (error) {
        console.log("Error while creating task!!");
        console.log(error);
        process.exit(1)     
   }
}

async function getAllTasks(req ,res){
   try {
     const tasks = await taskModel.find()
     if(tasks.length === 0){
         return res.status(400).json({
             message:"No tasks available!!"
         })
     }
     res.status(200).json({
         message:"Tasks fetched succesfully!!",
         tasks
     })
   } catch (error) {
        console.log("Error while fetching tasks!!");
        console.log(error);
        process.exit(1)
        
        
   }
}

async function updateTask(req,res){
  try {
      const {id} = req.params
      const {completed} = req.body
      if(!id){
          return res.status(400).json({message:"Id is required!!"})
      }
      if(completed === undefined){
          return res.status(400).json({message:"Status feild is required!!"})
      }
      const task = await taskModel.findOne({id})
      if(!task){
          return res.status(404).json({message:"Task not found!!"})
      }
      task.completed = completed
      res.status(200).json({
          message:"Task updated succesfully!!",
          task
      })
  } catch (error) {
        console.log("Error while updating task!!");
        console.log(error);
        process.exit(1)
        
        
  }
}

async function deleteTask(req,res){
   try {
     const {id} = req.params
     if(!id){
         return res.status(400).json({message:"id is required!!"})
     }
     const task = await taskModel.findOneAndDelete({id})
     return res.status(200).json({
         message:"Task deleted succesfully!!"
     })
   } catch (error) {
        console.log("Error while deleting task!!");
        console.log(error);
        process.exit(1)
        
        
   }
}

//Bonus part

async function filterTasks(req,res){
    try {
        const {completed} = req.query
        let filter = {}
        if(completed !== undefined){
            filter.completed = completed === "true"
        }
        const tasks = await taskModel.find(filter);
        res.status(200).json({
            message:"Tasks fetched succesfully!!",
            tasks
        })
    } catch (error) {
        console.log(error);
        process.exit(1)
        
        
    }

}

async function updateTitle(req,res){
  try {
      const {id} = req.params
      const {title} = req.body
      if(!id){
          return res.status(400).json({message:"Id is required!!"})
      }
      if(!title){
          return res.status(400).json({message:"Title is required!!"})
      }
      const task = await taskModel.findOne({id})
      if(!task){
          return res.status(404).json({message:"Task not found!!"})
      }
      task.title = title
      await task.save();
      res.status(200).json({
          message:"Title updated succesfully!!",
          task
      })
  } catch (error) {
        console.log("Error while updating title!!");
        console.log(error);
        process.exit(1)
        
        
  }
}


export {createTask,getAllTasks,updateTask,deleteTask,filterTasks,updateTitle}