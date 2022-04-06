const Assignment = require("../models/Assignment");
const Task = require("../models/Task");
const User = require("../models/User");

const assignmentController = {
  getAllAssignments: async (req, res) => {
    try {
      const assignments = await Assignment.find();
      res.json(assignments);
    } catch(error) {
      res.json({status: false, message: error.message})
    }
  },
  createAssignment: async (req,res) => {
    //check already exist
    if ( Assignment.find({
      $or: [
        {
          task_id: req.body.user_id
        },
        {
          user_id: req.body.user_id
        }
      ]
    })) {
      res.json({
        status: false,
        mesasge: "Assignment task already exist!"
      })
    }
    const assignment = new Assignment({
      task_id: req.body.task_id,
      user_id: req.body.user_id
    });
    try {
      const saveAssignment = await assignment.save();
      if (saveAssignment) {
        res.json({
          status: true,
          message: "Create Assignment successfully!",
        });
      }
    } catch (err) {
      res.json({
        status: false,
        mesasge: err.message
      });
    }
  },
  getListTaskPopulate: async (req, res) => {
    try {
      const user = await User.find({
      "_id": req.params.id
      }).populate('tasks');
      res.json({data: user});
    } catch(error) {
      res.json({msg: error.message})
    }
  }
};

module.exports = assignmentController;
