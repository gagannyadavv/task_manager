import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false,
        required:true
    }
},{timestamps:true})

const taskModel = mongoose.model("taskModel",taskSchema)

export {taskModel}