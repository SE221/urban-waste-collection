const express = require("express");
const router = express.Router();
const dbo = require("../db/config");

router.post("/api/create-test-users", function (req, res) {});

// Home page route.
router.post("/api/login", function (req, res) {
  res.send("Wiki home page");
});

// About page route.
router.get("/", async function (req, res) {
  console.log("in router");
  const dbConnect = dbo.getDb();
  console.log({ dbConnect });
  const users = dbConnect.collection("Users");
  console.log({ users });
  const all = await users.findOne({ ID: "C1410" });
  console.log({ all });
  res.send("hello");
});

module.exports = router;
