import { Router } from "express";
import { taskModel } from "../models/task.model.js";
import { createTask } from "../controllers/task.controller.js";
import { getAllTasks } from "../controllers/task.controller.js";
import { updateTask } from "../controllers/task.controller.js";
import { deleteTask } from "../controllers/task.controller.js";
import { filterTasks } from "../controllers/task.controller.js";
import { updateTitle } from "../controllers/task.controller.js";

const taskRouter = Router()
taskRouter.post('/tasks',createTask)
taskRouter.get('/tasks',getAllTasks)

taskRouter.patch('/tasks/:id',updateTask)
taskRouter.delete('/tasks/:id',deleteTask)

//Bonus part

taskRouter.get('/tasks/filter',filterTasks)
taskRouter.patch('/tasks/updatetitle/:id',updateTitle)





export {taskRouter}