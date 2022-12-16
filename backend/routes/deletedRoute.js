const express = require('express');

const DeletedTask = require(`../models/deletedTaskModel`);

const { getDeletedTasks, emptyBin } = require(`../controllers/deletedController`);
// const router = require('./taskRoute');
const router1 = express.Router();

// router1.route('/deleted').get(getDeletedTasks);
router1.get(`/`, getDeletedTasks);
router1.post(`/delete`, emptyBin);

module.exports = router1;
