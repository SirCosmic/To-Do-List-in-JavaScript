import { Router } from "express";
import { getTasks, createTasks } from "./controllers/TasksController.js";

const routes = Router();

routes.get('/tasks', getTasks);
routes.post('/tasks', createTasks);

export default routes;