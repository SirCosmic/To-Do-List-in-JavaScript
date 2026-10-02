import express from "express";

import UserTask from "./models/User.js";

import connectToDatabase from "./database/db.js";

const app = express();
app.use(express.json());
const PORT = 3000;


app.get('/', (req, res) => {
  res.send('Bem vindo!');
});

app.get('/tarefas', async (req, res) => {
  const tasks = await UserTask.find();
  return res.status(200).json(tasks);
});


app.post('/tarefas/enviar', async (req, res) => {
  const tasks = req.body;

  const newtask = await UserTask.create(tasks);

  return res.status(201).json(newtask);
})



connectToDatabase()
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