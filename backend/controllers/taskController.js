const Task = require('../models/taskModel');
const taskRoutes = require(`../routes/taskRoute`);

//# CREATE TASK
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//# GET ALL TASKS
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
//# GET ONE TASK
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json(`ID ${id} not found`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// # DELETE TASK
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json(`ID ${id} not found`);
    }

    res.status(200).send(`Task deleted.`);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// # UPDATE TASK
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, { new: true, runValidators: true });
    if (!task) {
      return res.status(404).json(`ID ${id} not found`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
module.exports = {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
};
