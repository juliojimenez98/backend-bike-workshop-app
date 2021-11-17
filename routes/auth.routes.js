const { Router } = require("express");
const { login } = require("../controller/auth.controller");

const router = Router();

router.post("/login", login);

module.exports = router;
