import { Router } from "express";
import { getTasks, createTasks, deleteTasks } from "./controllers/TasksController.js";

const routes = Router();

routes.get('/tasks', getTasks);
routes.post('/tasks', createTasks);
routes.delete('/tasks/:id', deleteTasks);

export default routes;