const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  check: {
    type: Boolean,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  currentPage: {
    type: Number,
    default: 0,
  },
  totalPages: {
    type: Number,
    default: 0,
  },
  progress: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Task", taskSchema);
