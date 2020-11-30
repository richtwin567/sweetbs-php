// This module generates the objects required for making queries to the database

const { ObjectId } = require("mongodb");
const order = require("../data_classes/order");
const MongoClient = require('mongodb').MongoClient;
const { OrderDocuments } = require('./documents');


/**
 * Abstract class to define a MongoDb document
 */
class Query{
    /**
     * 
     * @param {object} mongoClient The database object
     */
    constructor(dbPassword){
        // Initialize the client and database objects
        const uri = `mongodb+srv://admin_COMP2140:${dbPassword}@comp2140-project-2020-c.yvx5q.mongodb.net/sweebs?retryWrites=true&w=majority`;
        this.client = new MongoClient(uri, { useNewUrlParser: true});
    }
}  

class CustomerQueries extends Query{
    // Search Queries
    constructor(mongoClient){
        super(mongoClient);
    }
    
    /**
     * 
     * @param {Customer} customerObj 
     * @returns {object}
     */
    retrieveCustomerData(customerUsername){
        const query = { username: customerUsername };
        return query;
    }

    /**
     * 
     * @param {string} customerObj 
     * @returns {object}
     */
    retrieveCustomerPassword(customerUsername){
        const query = {username: customerUsername};
        return query;
    }

    // Update Queries

    /**
     * 
     * @param {Customer} customerObj 
     * @param {string} newPassword The plaintext password as a string
     */
    updatePassword(customerObj, newPassword){
        // Update password in customer obj
        customerObj.setPassword(newPassword);
        let newPass = customerObj.getPassword();

        // Search for customer based on username
        const filter = { username: customerObj.getUsername() };

        const updatedPassword = {
            $set:{
                password: newPass
            }
        };

        return {filter: filter, updatedPassword: updatedPassword};
    }

    /**
     * 
     * @param {*} customerObj 
     * @param {RealName} newName 
     */
    updateCustomerName(customerObj, newName){
        customerObj.setRealName(newName);
        const filter = { username: customerObj.getUsername() };

        const updatedName = {
            $set:{
                name: {
                    firstName: newName.getFirstName(),
                    lastName: newName.getLastName()
                }
            }
        };
        return {filter: filter, updatedName: updatedName};
    }
}


class OrderQueries extends Query{
    /**
     * 
     * @param {object} mongoClient 
     */
    constructor(dbPassword){
        super(dbPassword);
    }   

    // --------------------  Search Queries  ------------------------------ //

    /**
     * Searches for an order based on the customer's username
     * @param {string} customerUsername 
     */
    async retrieveOrderByUsername(customerUsername){
        const query = { customer: customerUsername };
        const databaseObj = await this.client.db("sweetb");
        const collection = databaseObj.collection('orders');
        const orderData = await collection.findOne(query);
        return orderData;
    }

    /**
     * 
     * @param {ObjectId} orderId 
     */
    async retrieveOrderById(orderId, databaseObj){
        const query = {_id: orderId};
        const collection = databaseObj.collection('orders');
        const orderData = await collection.findOne(query);
        return orderData;
    }

    async retrieveAllOrders(databaseObj){
        const query = {}
        const collection = databaseObj.collection('orders');
        const cursor = await collection.find(query).toArray();
        console.log(cursor);
        return cursor;
    }

    // -------------------- Insert Queries -------------------------------- //

    /**
     * Inserts one order into the database
     * @param {object} document The JSON object of an order
     */
    async insertOneOrder(document, databaseObj){
        const collection = databaseObj.collection('orders');
        let result = await collection.insertOne(document);
        console.log(`${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`)
    }

    /**
     * Inserts multiple orders into the database
     * @param {Array} documentsArr An array containing JSON objects representing an order
     */
    async insertOrders(documentsArr, databaseObj){
        const options = { ordered: true };
        const collection = databaseObj.collection('orders');
        const result = await collection.insertMany(documentsArr, options);
        console.log(`${result.insertedCount} documents were inserted`);
    }

    // --------------------  Update Queries  ------------------------------ //

    addItemToOrder(menuItemId){

    }

    // --------------------  Delete Queries ------------------------------ //
    deleteOrder(orderId){

    }
    
    removeFromOrder(menuItemId){

    }

    purgeOrders(){

    }
}


const testCustomerDocument = {
    username: 'BobAndersonLikesPotatoes',
    email: 'test@testuser.com',
    password: 'somerandomhash',
    name: {
        firstName: 'Bob',
        lastName: 'Anderson'
    },
    address:{
        deliveryAddress: ['Somewhere','Over','The','Rainbow']
    }
};





// Test Code for inserting and retrieving orders into/from the database

async function connect(orderQuery){
    const ObjectID = require('mongodb').ObjectID;
    const orderDocument = {
        _id: new ObjectID(),
        customer: 'BobAndersonLikesPotatoes',
        menuItemIds: [ new ObjectID('5fbdda932d7e3cad244acbee')]
    }
    // Initialize URI and Mongo Client
    const client = orderQuery.client;
    // Try-catch block to handle connecting to the database
    try{
        console.log('Connecting');
        await client.connect();
        console.log('Connected');
        dbo = await client.db('sweetb')
        console.log("Collections:");
        const collection = await orderQuery.retrieveAllOrders(dbo);
        await orderQuery.insertOneOrder(orderDocument, dbo);
        console.log(collection);
    }catch(err){
        console.error(err);
    }finally{
        await client.close();
        console.log('Closed Connection');
    }
}
const orderQuery = new OrderQueries('W62aZqXfeH4RrYkd');
connect(orderQuery);


module.exports = {OrderQueries, CustomerQueries};