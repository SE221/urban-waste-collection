const express = require("express");
const app = express();
const usersRouter = require("./src/routes/usersRoute");
const port = 1337;

app.use("/api/users", usersRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
