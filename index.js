
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://gowtham:GowtH5872%4001@cluster0.gvlvfma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    //make the approprite Db calls 
    // Access the database and then the collections 
    const database = client.db('sample_mfix');
    const collection = database.collection ('users');
    const users = await collection.find ({}).toArray();
    console.log(users.map(user => user.name));
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

