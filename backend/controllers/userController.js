const User = require("../models/User");
const Task = require("../models/Task");

const userController = {
	getAllUsers: async (req, res) => {
		try {
			const users = await User.find().populate('tasks');
			res.json({
				status: true,
				data: users
			});
		} catch(error) {
			res.status(500).json({
				status: false,
				message: error.message
			});
		}
	},
	getUserById: async (req, res) => {
	    try {
        const user = await User.findById(req.params.id).populate('tasks');
        res.status(200).json({
          message: "Get Data By Id Successfully!!!",
          data : user
        });
    } catch(err) {
      res.status(500).json({
        status: false,
        message: "Fail to fetch data by id"
      })
    }
	  },
	deleteUser: async (req, res) => {
		try {
			//remove task by user id;
			await Task.updateMany({users: req.params.id}, {$pull: {users: req.params.id}}); // remove user in table tasks
			await User.findByIdAndDelete(req.params.id);
			res.status(200).json({
				status: true,
				message: "Delete User Successfully!!!"
			});
		} catch(err) {
			res.status(500).json({
				status: false,
				message: err.message
			})
		}
	}
}

module.exports = userController;
