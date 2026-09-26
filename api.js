import express from "express";
import mongoose from "mongoose";

import UserTask from "./models/User.js";

const app = express();
app.use(express.json());
const PORT = 3000;


app.get('/', (req, res) => {
  res.send('Bem vindo!');
});

app.get('/tarefas', async (req, res) => {
  const tasks = await UserTask.find();
  res.json(tasks);
});


app.post('/tarefas/enviar', async (req, res) => {
  const tasks = req.body;

  const newtask = await UserTask.create(tasks);

  return res.json(newtask);
})




mongoose.connect("mongodb://guilhermetrajanog27_db_user:2mEJ0cnFBHoazIfe@ac-oqb8xju-shard-00-00.wf4yacf.mongodb.net:27017,ac-oqb8xju-shard-00-01.wf4yacf.mongodb.net:27017,ac-oqb8xju-shard-00-02.wf4yacf.mongodb.net:27017/?ssl=true&replicaSet=atlas-1268lx-shard-0&authSource=admin&appName=Cluster0")
.then(() => {
    console.log("Connected to MongoDB :)");
  }
)
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});