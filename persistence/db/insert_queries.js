// This module generates the objects required for making queries to the database
const url = require("url");
const { MongoClient, ObjectID } = require("mongodb");


/**
 * Abstract class to define a MongoDb document
 */
class InsertQuery {
    constructor() {
        // Initialize the client and database objects
        const uri = `mongodb+srv://admin_COMP2140:${process.env.PASSWORD}@${process.env.CLUSTERURL}/?authMechanism=${process.env.AUTHMETH}`;
        this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    }
}

class CustomerInsertQuery extends InsertQuery {
    // Search Queries
    constructor() {
        super();
    }

    async insertOneCustomer(customerDocument) {
        // Allow the client to connect before making query
        await this.client.connect();
        let userCollection = this.client.db('sweetb').collection("users");
        let result = await userCollection.insertOne(customerDocument);
        console.log(`${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`)
        this.client.close();
    }

    async insertManyCustomers(customerDocuments) {
        // Ensure that the documents are inserted in order
        const options = { ordered: true };
        await this.client.connect();
        let userCollection = this.client.db('sweetb').collection("users");
        const result = await userCollection.insertMany(customerDocuments, options);
        console.log(`${result.insertedCount} documents were inserted`);
    }
}


class OrderInsertQuery extends InsertQuery {
    /**
     * Used for querying orders from the database
     * @param {String} dbPassword The password of the database
     */
    constructor() {
        super();
    }

    /**
     * Inserts one order into the database
     * @param {object} document The JSON object of an order
     */
    async insertOneOrder(orderDocument) {
        await this.client.connect();
        let orderCollection = this.client.db('sweetb').collection('orders');
        let result = await orderCollection.insertOne(orderDocument);
        console.log(`${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`)
        this.client.close();
    }

    /**
     * Inserts multiple orders into the database
     * @param {Array} documentsArr An array containing JSON objects representing an order
     */
    async insertManyOrders(orderDocumentArr) {
        const options = { ordered: true };
        await this.client.connect();
        let orderCollection = this.client.db('sweetb').collection('orders');
        const result = await orderCollection.insertMany(orderDocumentArr, options);
        console.log(`${result.insertedCount} documents were inserted`);
        this.client.close();
    }
}

module.exports = { OrderInsertQuery, CustomerInsertQuery };