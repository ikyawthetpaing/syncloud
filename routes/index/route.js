const express = require("express");
const { getAbsolutePath } = require("../../lib/utils");
const router = express.Router();

router.get("/", (_, res) => {
  try {
    res.sendFile(getAbsolutePath("/views/index.html"));
  } catch (err) {
    console.error("Error sending file:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
