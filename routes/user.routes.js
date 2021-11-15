const { Router } = require("express");
const { createUser } = require("../controller/user.controller");

const router = Router();

router.post("/", createUser);

module.exports = router;
