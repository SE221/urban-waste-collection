const express = require("express");
const userController = require("../controllers/userController");
const { auth } = require("../helper/auth");

const router = express.Router();

// get all users (!!! including BO !!!)
router.get("/users", auth, userController.findAllUsers);

// get all workers
router.get("/workers", auth, userController.findAllWorkers);

// get one user by id
router.get("/user/:id", auth, userController.findUser);

// create 2 BOs
router.post("/create-test-bos", userController.createTest);

// register
router.post("/register", userController.register);

// login
router.post("/login", userController.login);

// logout
router.delete("/logout", userController.logout);

// generate access token
router.post("/generate-access-token", userController.generateAccessToken);

module.exports = router;
