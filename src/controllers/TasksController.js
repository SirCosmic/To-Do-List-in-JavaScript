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

async function deleteTasks(req, res) {
    const id = req.params.id;

    await UserTask.findByIdAndDelete({ _id: id });

    return res.status(200).json({ message: "Task deleted successfully" });
}

export { getTasks, createTasks, deleteTasks };