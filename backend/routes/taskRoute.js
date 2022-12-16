const express = require('express');
const Task = require(`../models/taskModel`);
const deletedTask = require(`../models/deletedTaskModel`);
const { createTask, getTasks, getTask, deleteTask, updateTask } = require(`../controllers/taskController`);
// const { createDeletedTask, getDeletedTasks } = require(`../controllers/deletedController`);
const router = express.Router();

router.route('/').get(getTasks).post(createTask);
router.route('/:id').get(getTask).delete(deleteTask).put(updateTask);
// router.route('/deleted').get(getDeletedTasks).post(createDeletedTask);
// mk

module.exports = router;
