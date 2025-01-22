import mongoose, { model } from "mongoose";


const taskSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true,
        trim: true
    },
    description:{
        type: String,
        required : true,
    },
    status :{
        type : String,
        enum : ['pending','in-process','completed'],
        default : 'pending'
    },
    priority:{
        type : String,
        enum :['low','medium','high'],
        default:'medium'
    },
    createdAt :{
        type : Date,
        default : Date.now
    }
});

const Task = mongoose.model('tasksdetails',taskSchema);
mongoose.connect('mongodb://localhost:27017/TaskManager');

export {Task}