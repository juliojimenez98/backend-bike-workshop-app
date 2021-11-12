const { Router } = require("express");
const {
  getUsers,
  getUser,
  createUser,
} = require("../controller/users.controller");

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);

module.exports = router;
