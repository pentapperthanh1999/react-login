const router = require("express").Router();
const User = require("../models/User");
const userController = require("../controllers/userController");
const verify = require("./verifyToken");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.delete("/:id", userController.deleteUser);
module.exports = router;
