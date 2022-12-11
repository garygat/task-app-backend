const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Empty field'],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
