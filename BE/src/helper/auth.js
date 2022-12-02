const jwt = require("jsonwebtoken");

module.exports = {
  auth: function (req, res, next) {
    const authHeader = req.headers["authorization"];
    const accessToken = authHeader && authHeader.split(" ")[1];
    if (!accessToken) {
      return res.status(401).send("Access denied due to missing token");
    }

    console.log({ accessToken });

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY, (err, user) => {
      if (err) {
        return res.status(403).send("No permission");
      }
      req.user = user;
      next();
    });
  },
};
