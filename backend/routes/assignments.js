const router = require("express").Router();
const assignmentController = require("../controllers/assignmentController.js");
const verify = require("./verifyToken");

router.get("/", assignmentController.getAllAssignments);
router.post("/", assignmentController.createAssignment);

module.exports = router;