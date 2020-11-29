// This module generates the objects required for making queries to the database

const { ObjectId } = require("mongodb");


/**
 * Abstract class to define a MongoDb document
 */
class Query{
    constructor(){
        if(this.constructor == Query){
            throw new Error("Abstract classes cannot be instantiated");
        }
    }
}

class CustomerQueries extends Query{
    // Search Queries
    
    constructor(client){
        this.client = client;
    }
    /**
     * Inserts a document into the database
     * @param {MongoClient} client The MongoClient used to connect to the database
     * @param {Document} document The document being inserted into the database
     * @param {string} collectionName The name of the collection the document is being inserted into
     * @param {string} databaseName The name of the database being accessed
     */
    async insertDocument(document, collectionName, databaseName){
        const database = this.client.db(databaseName);
        const collection = database.collection(collectionName);
        result = await collection.insertOne(document);
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

        const options
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
    // Search Queries  
    /**
     * Searches for an order based on the customer's username
     * @param {string} customerUsername 
     */
    retrieveOrderByUsername(customerUsername){
        const query = { customer: customerUsername };
        return query;
    }

    /**
     * 
     * @param {ObjectId} orderId 
     */
    retrieveOrderById(orderId){
        const query = {_id: orderId};
        return query;
    }

    // Update Queries
    addItemToOrder(menuItemId){

    }

    // Delete Queries
    deleteOrder(orderId){

    }
    
    removeFromOrder(menuItemId){

    }
}