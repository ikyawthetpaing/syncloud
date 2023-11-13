const express = require("express");
const { getAbsolutePath } = require("../../lib/utils");
const router = express.Router();
const path = require("path");

router.get("/", (_, res) => {
  try {
    res.sendFile(path.join(__dirname, "..", "..", "pages/index.html"));
  } catch (err) {
    console.error("Error sending file:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
