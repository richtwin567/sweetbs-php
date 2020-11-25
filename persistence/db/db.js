// Import Mongo Client
const MongoClient = require('mongodb').MongoClient;


async function connect(){
    // Initialize URI and Mongo Client
    const uri = "mongodb+srv://admin_COMP2140:<password>@comp2140-project-2020-c.yvx5q.mongodb.net/sweebs?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true});

    // Try-catch block to handle connecting to the database
    try{
        console.log('Connecting');
        await client.connect();
        console.log('Connected');
        await listDatabases(client);
    }catch(err){
        console.error(err);
    }finally{
        await client.close();
        console.log('Closed Connection');
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

connect().catch(console.error);