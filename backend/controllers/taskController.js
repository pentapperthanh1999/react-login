const Task = require("../models/Task");
const User = require("../models/User");
const { taskValidation } = require("../validations/task.validation.js");
var moment = require('moment');

const taskController = {
  getAllTasks: async (req, res) => {
    const tasks = await Task.find().populate('users', 'firstname lastname');
    if (tasks) {
      res.json({message: "Fetch Data Successfully!", status: true, data: tasks});
    } else {
      res.json({message: "fail"});
    }
  },
  getTaskById: async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).populate('users');
        res.status(200).json({
          message: "Get Data By Id Successfully!!!",
          data : task
        });
    } catch(err) {
      res.status(500).json({
        status: false,
        message: "Fail to fetch data by id"
      })
    }
  },
  createTask: async (req, res) => {
    const { error } = taskValidation(req.body);
    if (error) {
      return res.status(401).send(error.details[0].message);
    }
    // check already exist
    const checkTask = await Task.find({title: req.body.title}).count();
    if (checkTask > 0) {
      return res.status(400).json({message: 'Task already exist!!!'});
    }

    req.body.start_time = moment(req.body.start_time).format("DD-MM-YYYY");
    req.body.end_time = moment(req.body.end_time).format("DD-MM-YYYY");

    try {
      const task = new Task(req.body);
      const savedTask = await task.save();
      if (req.body.users) {
        const userData = User.find({
          _id: req.body.users,
        });
        // push tasks in table user
        await userData.updateMany({
          $push: {tasks: savedTask._id}
        });
      }
      res.json({
          task: task._id,
          message: "Created successfully!",
        });
      
    } catch (err) {
      res.status(400).json({message: err.message});
    }
  },
  updateTask: async (req, res) => {
    // handle validate
    const { error } = taskValidation(req.body);
    if (error) {
      return res.status(401).send(error.details[0].message);
    }
    try {
      if (req.body.users) {
        if (req.body.users) {
          const userData = User.find({
            _id: req.body.users
          })
          // push tasks in table user
          await userData.updateMany({
            $push: {tasks: req.params.id}
          });
        }      
      }
      const task = await Task.findById(req.params.id);
      await task.updateOne({$set: req.body})
      
      res.status(200).json({
        status: true,
        message: "Updated Successfully"
      });
    } catch(err) {
      res.status(500).send({message: "Could not update task with id ", error: err.message });
    }
  },
  deleteTask: async (req, res) => {
    try {
      await User.updateMany({tasks: req.params.id}, {$pull: {tasks: req.params.id}});
      await Task.findByIdAndDelete(req.params.id);
      res.status(200).json({
        _id: req.params.id,
        status: true,
        message: "Deleted Successfully!!!"
      })
    } catch(err) {
      res.status(500).json({
        status: false,
        message: err.message
      })
    }
  }
};

module.exports = taskController;
