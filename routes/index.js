const express = require("express");
const router = express.Router();
const controller = require("../controllers");

router.post("/", controller.createNote);

router.post("/:id", controller.getNote);

module.exports = router;
