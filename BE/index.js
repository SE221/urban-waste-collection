const express = require("express");
const app = express();
const usersRouter = require("./src/routes/usersRoute");
const mcpsRouter = require("./src/routes/mcpRoute");
const port = 1337;

app.use(express.json());
app.use("/api", usersRouter);
app.use("/api", mcpsRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
