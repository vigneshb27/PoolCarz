const express = require("express");
console.log("express");
// controller functions
const { loginUser, getAllUsers } = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);
router.get("/users", getAllUsers);
module.exports = router;
