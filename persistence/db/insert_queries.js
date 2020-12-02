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
<<<<<<< HEAD
    async insertOneOrder(orderDocument) {
        await this.client.connect();
        let orderCollection = this.client.db('sweetb').collection('orders');
        let result = await orderCollection
        .insertOne(orderDocument);
=======
    async insertOneOrder(document){
        const collection = this.client.db("sweetb").collection('orders');
        let result = await collection.insertOne(document);
>>>>>>> 2069467065b9a3d9439d329b8543dd4eabecf2fb
        console.log(`${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`)
        this.client.close();
    }

    /**
     * Inserts multiple orders into the database
     * @param {Array} documentsArr An array containing JSON objects representing an order
     */
<<<<<<< HEAD
    async insertManyOrders(orderDocumentArr) {
        const options = { ordered: true };
        await this.client.connect();
        let orderCollection = this.client.db('sweetb').collection('orders');
        const result = await orderCollection.insertMany(orderDocumentArr, options);
=======
    async insertOrders(documentsArr){
        const options = { ordered: true };
        const collection = this.client.db("sweetb").collection('orders');
        const result = await collection.insertMany(documentsArr, options);
>>>>>>> 2069467065b9a3d9439d329b8543dd4eabecf2fb
        console.log(`${result.insertedCount} documents were inserted`);
        this.client.close();
    }
}

const testOrderDocument1 = {
    _id: new ObjectID(),
    customer: 'noelpo',
    items: [{ qty: 5, menuitem: new ObjectID('5fbd7b6b98af411d70c0416a') },
    { qty: 3, menuitem: new ObjectID('5fbd7beb98af411d70c0416b') },
    { qty: 2, menuitem: new ObjectID('5fbd7beb98af411d70c0416b') },
    ],
}

const testOrderDocument2 = {
    _id: new ObjectID(),
    customer: 'L0ki',
    items: [{ qty: 10, menuitem: new ObjectID('5fbd7b6b98af411d70c0416a') },
    { qty: 2, menuitem: new ObjectID('5fbd7b6b98af411d70c0416a') },
    ],
}

const testOrderDocument3 = {
    _id: new ObjectID(),
    customer: 'Rick-Ashley',
    items: [{ qty: 1, menuitem: new ObjectID('5fbd7b6b98af411d70c0416a') }
    ],
}

const testOrders = [testOrderDocument1];

let orderQuery = new OrderInsertQuery();
//orderQuery.insertOneOrder(testOrderDocument3);
/*
const testCustomerObj = new Customer('BobAnderson420', 'test@bob.com', 'supersecretpass', null, null);
console.log(testCustomerObj.getPassword());
const testCustomerDocument = {
    _id: new ObjectID(),
    username: testCustomerObj.getUsername(),
    email: testCustomerObj.getEmail(),
    password: testCustomerObj.getPassword(),
    type: 'Customer'
}

let custQuery = new CustomerInsertQuery();
custQuery.insertOneCustomer(testCustomerDocument);
 */

module.exports = { OrderInsertQuery, CustomerInsertQuery };