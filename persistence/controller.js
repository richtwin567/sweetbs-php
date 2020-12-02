const url = require("url");
//const users = require("./userData.js");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const Hashing = require("./security/hashing");

const dburi = `mongodb+srv://admin_COMP2140:${process.env.PASSWORD}@${process.env.CLUSTERURL}/?authMechanism=${process.env.AUTHMETH}`;

function setResponseHeaders(response) {
	response.setHeader("Content-Type", "Application/json");
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
	response.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

module.exports = {
	fetchOptions: async (req, res) => {
		res.statusCode = 200;
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Methods", "GET,PATCH,DELETE,POST");
		res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
		res.setHeader("Access-Control-Allow-Headers", "Content-Type");
		res.setHeader("Content-Type", "text/html");
		res.end();
	},

	getMenuItems: async (req, res) => {
		//console.log(req.query);
		//console.log(req.param);
		const reqUrl = url.parse(req.url, true);
		const query = reqUrl.query;
		if ("_id" in query) {
			query["_id"] = new ObjectId(query["_id"]);
		}
		console.log(query);
		const client = new MongoClient(dburi, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		await client.connect();
		console.log("Connected, getting menu items");
		var col = client.db("sweetb").collection("menuitems");
		var curs = await col.find(query).toArray();
		res.statusCode = 200;
		setResponseHeaders(res);
		res.write(JSON.stringify(curs));
		await client.close();
		await res.end();
	},

	getOrders: async (request, response) => {
		// Initializing the request URL and the request URL query
		const requestUrl = url.parse(request.url, true);
		const query = requestUrl.query;
		const client = new MongoClient(dburi, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		await client.connect();
		console.log("Connected, getting all orders");
		// Retrieve data from MongoDb
		let ordersCollection = client.db("sweetb").collection("orders");
		if ("_id" in query) {
			query["_id"] = new ObjectId(query["_id"]);
		}

		// Perform Orders Query
		let data = await ordersCollection.find(query).toArray();
		console.log(data);
		response.statusCode = 200;
		setResponseHeaders(response);
		response.write(JSON.stringify(data));

		// Closing the connection and ending the response.
		await client.close();
		await response.end();
	},

	getIngredients: async (request, response) => {
		// Initialize key variables
		const requestUrl = url.parse(request.url, true);
		const query = requestUrl.query;
		const client = new MongoClient(dburi, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		// Attempt to connect to MongoDb
		await client.connect();
		console.log("Connected, getting all ingredients");

		// Retrieve data from MongoDb
		let ingredientsCollection = client
			.db("sweetb")
			.collection("ingredients");
		if ("_id" in query) {
			query["_id"] = new ObjectId(query["_id"]);
		}

		// Perform ingredients Query
		let data = await ingredientsCollection.find(query).toArray();
		console.log(data);
		response.statusCode = 200;
		setResponseHeaders(response);
		response.write(JSON.stringify(data));

		// Closing the connection and ending the response.
		await client.close();
		await response.end();
	},

	getUser: async (request, response) => {
		// Initialize key variables
		const requestUrl = url.parse(request.url, true);
		const query = requestUrl.query;
		const client = new MongoClient(dburi, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		// Attempt to connect to MongoDb
		await client.connect();
		console.log("Connected, getting all users");

		// Retrieve data from MongoDb
		let usersCollection = client.db("sweetb").collection("users");
		if ("_id" in query) {
			query["_id"] = new ObjectId(query["_id"]);
		}
		var username_query = {"username": query["username"]};

		// Perform user Query
		let data = await usersCollection.find(username_query).toArray();
		console.log(data);
		if ("password" in query) {
			var hash = new Hashing();
			var matches = hash.verifyHash(
				data[0]["password"]["hashed_password"],
				query["password"],
				data[0]["password"]["salt"]
			);
			if (matches) {
				setResponseHeaders(response);
				response.statusCode = 200;
				response.write(JSON.stringify(data));
			} else {
				setResponseHeaders(response);
				response.statusCode = 409;
				response.write("Password does not match");
			}
		} else {
			response.statusCode = 200;
			setResponseHeaders(response);
			response.write(JSON.stringify(data));
		}

		// Closing the connection and ending the response.
		await client.close();
		await response.end();
	},
};
