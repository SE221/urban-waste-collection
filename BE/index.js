const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.ATLAS_URI;

const client = new MongoClient(uri);

async function run() {
  console.log("in run function");
  try {
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
