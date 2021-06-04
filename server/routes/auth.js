const express = require("express");
const router = express.Router();

const {
  login,
  register,
  forgotPassword,
  resetPassword,
  info,
} = require("../controllers/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotpwd").post(forgotPassword);
router.route("/passwordreset/:resetToken").put(resetPassword);

module.exports = router;
