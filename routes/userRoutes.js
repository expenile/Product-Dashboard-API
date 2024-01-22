const { registerUser, loginUser } = require("../controllers/userController");

const router = require("express").Router();

// /users/register
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
