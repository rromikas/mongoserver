const express = require("express");
const router = express.Router();

router.get("/*", function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "client", "build"));
});
module.exports = router;
