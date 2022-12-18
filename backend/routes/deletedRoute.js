const express = require('express');

const DeletedTask = require(`../models/deletedTaskModel`);

const { getDeletedTasks, deleteTask, emptyBin } = require(`../controllers/deletedController`);
// const {  } = require('../controllers/deletedController');
// const router = require('./taskRoute');
const router1 = express.Router();

// router1.route('/deleted').get(getDeletedTasks);
router1.get(`/`, getDeletedTasks);
router1.post(`/delete`, emptyBin);
router1.delete(`/:id`, deleteTask);

module.exports = router1;
