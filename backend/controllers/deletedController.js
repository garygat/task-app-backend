const deletedTask = require('../models/deletedTaskModel');
// const deletedTaskRoutes = require('../routes/deletedRoute');
// const taskRoutes = require(`../routes/taskRoute`);

//# CREATE TASK
const createDeletedTask = async (req, res) => {
  try {
    const task = await deletedTask.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//# GET ALL TASKS
const getDeletedTasks = async (req, res) => {
  try {
    const delTasks = await deletedTask.find();
    res.status(200).json(delTasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
// //# GET ONE TASK
// const getDeletedTask = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const task = await deletedTask.findById(id);

//     if (!task) {
//       return res.status(404).json(`ID ${id} not found`);
//     }
//     res.status(200).json(task);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };

// // # DELETE TASK
const emptyBin = async (req, res) => {
  try {
    const deleteMany = await deletedTask.deleteMany({});
    // await deletedTask.deleteMany({});
    console.log('All Data successfully deleted');
    // await getDeletedTasks();
    if (!task) {
      return res.status(404).json(`ERROR 404`);
    }

    res.status(200).send(`Bin emptied`);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// // # UPDATE TASK
// const updateTask = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const task = await deleteTask.findByIdAndUpdate({ _id: id }, req.body, { new: true, runValidators: true });
//     if (!task) {
//       return res.status(404).json(`ID ${id} not found`);
//     }
//     res.status(200).json(task);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };
module.exports = {
  getDeletedTasks,
  createDeletedTask,
  emptyBin,
  // getDeletedTask,
  // deleteTask,
  // updateTask,
};
