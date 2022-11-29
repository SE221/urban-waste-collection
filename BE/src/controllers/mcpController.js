const bcrypt = require("bcrypt");
const dbo = require("../db/config");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const db = dbo.getDb();
let refreshTokens = [];

exports.findAllMcps = async (req, res) => {
  const allMcps = await db.collection("MCP").find({}).toArray();
  return res.send(allMcps);
};

exports.findAllOverloadedMcps = async (req, res) => {
  const allMCPs = await db.collection("MCP").find({}).toArray();
  const allOverloadedMCPs = allUsers.filter((mcp) => mcp.Status == "Overloaded");
  return res.send(allWorkers);
};

exports.findMcp = async (req, res) => {
  const MCP = await db.collection("MCP").findOne({ MCP_ID: req.params.id });
  return res.send(MCP);
};



 

