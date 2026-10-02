import UserTask from "../models/User.js";

async function getTasks(req, res) {
    const tasks = await UserTask.find();

    return res.status(200).json(tasks);
};

async function createTasks(req, res) {
    const tasks = req.body;

    const newtask = await UserTask.create(tasks);

    return res.status(201).json(newtask);
};

export { getTasks, createTasks };