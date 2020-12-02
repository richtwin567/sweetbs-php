// This module generates the objects required for making queries to the database
const url = require("url");
const { MongoClient, ObjectID } = require("mongodb");
const { User, Customer, Admin } = require("../data_classes/user");
const { UserDocuments } = require("./documents");
const { RealName, Address } = require("../data_classes/customer_data");

/**
 * Abstract class to define a MongoDb document
 */
class InsertQuery {
	constructor() {
		// Initialize the client and database objects
		const uri = `mongodb+srv://admin_COMP2140:${process.env.PASSWORD}@${process.env.CLUSTERURL}/?authMechanism=${process.env.AUTHMETH}`;
		this.client = new MongoClient(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
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
		let userCollection = this.client.db("sweetb").collection("users");
		let c = new Customer(
			customerDocument["username"],
			customerDocument["email"],
			customerDocument["password"],
			new RealName(
				customerDocument["realname"]["firstname"],
				customerDocument["realname"]["lastname"]
			),
			new Address(customer["delivery_address"])
		);
		let ud = new UserDocuments();
		let cd = ud.createCustomerDocument(c);
		let result = await userCollection.insertOne(cd);
		console.log(
			`${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`
		);
		this.client.close();
	}

	async insertManyCustomers(customerDocuments) {
		// Ensure that the documents are inserted in order
		const options = { ordered: true };
		await this.client.connect();
		let userCollection = this.client.db("sweetb").collection("users");
		const result = await userCollection.insertMany(
			customerDocuments,
			options
		);
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
	async insertOneOrder(document) {
		const collection = this.client.db("sweetb").collection("orders");
		let result = await collection.insertOne(document);
		console.log(
			`${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`
		);
	}

	/**
	 * Inserts multiple orders into the database
	 * @param {Array} documentsArr An array containing JSON objects representing an order
	 */
	async insertOrders(documentsArr) {
		const options = { ordered: true };
		const collection = this.client.db("sweetb").collection("orders");
		const result = await collection.insertMany(documentsArr, options);
		console.log(`${result.insertedCount} documents were inserted`);
	}
}

module.exports = { OrderInsertQuery, CustomerInsertQuery };
