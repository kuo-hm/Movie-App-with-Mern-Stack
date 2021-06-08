const express = require("express");
const router = express.Router();

const { save, info } = require("../controllers/info");

router.route("/save").post(save);
router.route("/info").get(info);
// router.route("/forgotpwd").post(forgotPassword);
// router.route("/passwordreset/:resetToken").put(resetPassword);

module.exports = router;
