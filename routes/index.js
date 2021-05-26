const express = require("express");
const router = express.Router();
const controller = require("../controllers");
const Firestore = require("@google-cloud/firestore");

const PROJECT_ID = "note-app-314122";
const COLLECTION_NAME = "notes";

const firestore = new Firestore({
  projectId: PROJECT_ID,
  timestampsInSnapshots: true,
});

router.post("/", controller.createNote);

router.post("/:id", controller.getNote);

module.exports = router;
