const mongoose = require("mongoose");
let ObjectId = require('mongodb').ObjectID;

const assignmentSchema = new mongoose.Schema({
  task_id: {
    type: ObjectId,
    required: true,
    ref: 'task'

  },
  user_id: {
    type: ObjectId,
    required: true,
    ref: 'user'
  },
});

module.exports = mongoose.model("Assignment", assignmentSchema);
