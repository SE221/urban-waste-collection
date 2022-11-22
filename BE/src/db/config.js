const { MongoClient } = require("mongodb");
require("dotenv").config();
const connectionString = process.env.ATLAS_URI;
console.log({ connectionString });
const client = new MongoClient(connectionString);

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db("UWC2");
      console.log("Successfully connected to MongoDB.");

      return callback();
    });
  },

  getDb: function () {
    dbConnection = client.db("UWC2");
    return dbConnection;
  },
};
