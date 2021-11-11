const { Router } = require("express");
const { getUsers } = require("../controller/users.controller");

const router = Router();

router.get("/", getUsers);

module.exports = router;
