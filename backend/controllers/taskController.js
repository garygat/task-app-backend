const Task = require('../models/taskModel');
const taskRoutes = require(`../routes/taskRoute`);
// const taskRoutes = require(`../routes/deletedRoute`);
const deletedTask = require('../models/deletedTaskModel');
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
  const { id } = req.params;
  let tae;

  try {
    tae = await Task.findOne({ _id: id });
    // .populate('name')
    // .exec(async (error, task) => {
    //   // console.log(task.name); // Shows the user result
    //   let name;
    //   name = await task.name;
    await deletedTask.create({ name: tae.name }).then(() => console.log(`Moved to bin`));
    // console.log(name);
    // return name;
    // });

    // RetrieveName(task, function (err, name) {
    //   if (err) {
    //     console.log(err);
    //   }
    //   tae1 = name;
    //   console.log(tae1);
    // });

    await console.log(tae);
    // await console.log(name);
    // await deletedTask.create({ name: tae }).then(() => console.log(`added`));
    // const tae1 = await deletedTask.find({});
    // console.log(tae1);

    // const addToDelete = await deleteTask.create(id, name);
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
    const { name } = req.body;
    tae = await Task.findOne({ _id: id });
    // .populate('name')
    // .exec(async (error, task) => {
    // console.log(task.name); // Shows the user result
    // let name1;
    // name1 = await task.name;
    // # CONDITON IF STATE CHANGED
    if (tae.name === name) {
      console.log(`Task ${tae.name} was not changed!`);
    } else {
      await deletedTask.create({ name: tae.name }).then(() => console.log(`Old data moved to bin.`));
    }

    // console.log(name);
    // return name;
    // });
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
