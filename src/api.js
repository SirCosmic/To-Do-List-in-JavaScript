import express from "express";
import connectToDatabase from "./database/db.js";
import routes from "./routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes);

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => { console.log(`Servidor rodando na porta: ${PORT}`) });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });