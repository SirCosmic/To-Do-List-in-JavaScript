import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/tarefas', (req, res) => {
  res.json(tasks);
  res.status(200).json(tasks);
});

const tasks = [];
app.post('/tarefas/enviar', (req, res) => {
  tasks.push(req.body);
  res.status(201).json(req.body);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});