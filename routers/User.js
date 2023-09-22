const { Router } = require("express");
const router = Router();
const {
  Signup,
  Login,
  AccountDelete,
} = require("../controllers/UserController");
const { verifyToken } = require("../config/Jwt");

router.post("/signup", Signup);
router.post("/login", Login);
router.delete("/delete/:userId", verifyToken, AccountDelete);

module.exports = router;
