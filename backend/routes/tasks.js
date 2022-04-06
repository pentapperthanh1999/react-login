const router = require("express").Router();
const taskController = require("../controllers/taskController");
const assignmentController = require("../controllers/assignmentController.js");
const verify = require("./verifyToken");

router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);
router.get("/:id" , taskController.getTaskById);
router.delete("/:id", taskController.deleteTask);
router.put("/:id", taskController.updateTask);
// router.post('/user/' ,taskController.assignTask);
router.get("/user/:id", assignmentController.getListTaskPopulate);

module.exports = router;