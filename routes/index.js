var express = require("express");
var router = express.Router();
const User = require("../models/user");
const userController = require("../controllers/userController");
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Home" });
});

router.post("/insert", userController.insertUser);

router.get("/getUsers", userController.getUsers);

router.post("/updateUser", userController.updateUser);

router.post("/deleteUser", userController.deleteUser);

router.post("/getSpecificUser", userController.getSpecificUser);

module.exports = router;
