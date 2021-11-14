import Task from "../models/task.model.js";

export const addTask = (req, res) => {
  try {
    console.log(req.body);
    const newTask = req.body;
    Task.create(newTask, (err, data) => {
      if (!err) {
        res.status(200).json(data);
      } else {
        res.status(400).json(err);
      }
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getTasks = (req, res) => {
  try {
    console.log(req.body);
    Task.find({ userId: req.body.id }, (err, data) => {
      if (!err) {
        console.log(data);
        res.status(200).json(data);
      } else {
        res.status(400).json(err);
      }
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const deleteTask = (req, res) => {
  try {
    console.log(req.body);
    Task.deleteOne({ _id: req.body.id }, (err, data) => {
      if (!err) {
        Task.find({ userId: req.body.userId }, (error, foundTasks) => {
          if (!error) {
            res.status(200).json(foundTasks);
          } else res.status(400).json(error);
        });
      } else {
        res.status(400).json(err);
      }
    });
  } catch (e) {
    res.status(500).json(e);
  }
};
