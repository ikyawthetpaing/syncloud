const express = require("express");
const path = require("path");
const { connectDatabase } = require("./db/connect");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

connectDatabase(process.env.MONGODB_URI);

app.use(express.static(path.join(__dirname, "public")));
app.use("/", require("./routes/index/route"));
app.use("/api", require("./routes/api/route"));
app.all("*", (req, res) => {
  try {
    res.status(404);
    if (req.accepts("html")) {
      res.sendFile(path.join(__dirname, "pages", "404.html"));
    } else if (req.accepts("json")) {
      res.json({ error: "404 Not Found" });
    } else {
      res.type("txt").send("404 Not Found");
    }
  } catch (err) {
    console.error(`Error checking file existence: ${err}`);
    res.status(500).send("Internal Server Error");
  }
});
app.listen(port, () => console.log(`Server is up on port ${port}`));

module.exports = app;
