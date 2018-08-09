const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user');

router.post("/signup", UserController.createUser);
// Checks if user is registered in the DB
router.post('/login', UserController.userLogin);
module.exports = router;