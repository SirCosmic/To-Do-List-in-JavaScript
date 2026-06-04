import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/tarefas', (req, res) => {
  res.json([
    { id: 1, title: 'Tarefa 1', completed: false }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});