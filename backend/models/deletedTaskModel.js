const mongoose = require('mongoose');

const deletedTaskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Empty field'],
    },
    completed: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const deletedTask = mongoose.model('deletedtask', deletedTaskSchema);
module.exports = deletedTask;
