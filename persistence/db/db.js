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

/**
 * Outputs a list of the databases to the console.
 * @param {MongoClient} client The MongoClient used to connect to the database.
 */
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}


/**
 * Inserts a document into the database
 * @param {MongoClient} client The MongoClient used to connect to the database
 * @param {Document} document The document being inserted into the database
 * @param {string} collectionName The name of the collection the document is being inserted into
 * @param {string} databaseName The name of the database being accessed
 */
async function insertDocument(client, document, collectionName, databaseName){
    const database = client.db(databaseName);
    const collection = database.collection(collectionName);
    result = await collection.insertOne(document);
}


connect().catch(console.error);