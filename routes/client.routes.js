const { Router } = require("express");
const {
  getClient,
  getClients,
  createClient,
  updateClient,
} = require("../controller/client.controller");

const router = Router();

router.get("/", getClients);
router.get("/:id", getClient);
router.post("/", createClient);
router.put("/:id", updateClient);

module.exports = router;
