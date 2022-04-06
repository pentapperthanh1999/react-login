const mongoose = require('mongoose');
let ObjectId = require('mongodb').ObjectID;
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
  type: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
  status: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
  priority: {
    type: Number,
    required: true,
  },
  start_time: {
    type: String,
  },
  end_time: {
    type: String,
  },
  users: [{
      type: ObjectId,
      ref: "User"
    }]
});

// taskSchema.virtual('users', {
//   ref: 'User',
//   localField: '_id',
//   foreignField: 'user_id',
//   justOne: false // set true for one-to-one relationship
// })

module.exports = mongoose.model("Task", taskSchema);