import mongoose from "mongoose";

const userTask = new mongoose.Schema({
    createDate: { type: Date, default: Date.now, required: true },
    tarefa: { type: String, required: true },
    status: { type: String, required: true },
    exclusionDate: { type: Date, required: false },
});

export default mongoose.model("UserTask", userTask);