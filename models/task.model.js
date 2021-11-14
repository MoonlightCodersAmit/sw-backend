import mongoose from "mongoose";

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: { type: String },
  date: { type: String },
  details: { type: String },
  importance: { type: String },
  userId: { type: String },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
