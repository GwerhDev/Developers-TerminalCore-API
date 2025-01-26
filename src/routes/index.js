const router = require('express').Router();

const loginInner = require("../controllers/login-inner");

router.use("/login-inner", loginInner);

module.exports = router;