const url = require("url");
//const users = require("./userData.js");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const OrderQueries = require("./db/queries").OrderQueries;
const IngredientsQueries = require("./db/queries").IngredientsQueries;

const dburi = `mongodb+srv://admin_COMP2140:${process.env.PASSWORD}@${process.env.CLUSTERURL}/?authMechanism=${process.env.AUTHMETH}`;

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
		res.setHeader("Content-Type", "Application/json");
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
		res.setHeader("Access-Control-Allow-Headers", "Content-Type");
		res.write(JSON.stringify(curs));
		await client.close();
		await res.end();
	},

	getOrders: async (request, response) => {
        // Initializing the request URL and the request URL query
        const requestUrl = url.parse(request.url, true);
        const query = requestUrl.query;
        const orderQueryObj = new OrderQueries(process.env.PASSWORD);

        // Query for all of the orders
        await orderQueryObj.client.connect();
        console.log("Connected, getting all orders");

        // Retrieve data from MongoDb
        let databaseObj = orderQueryObj.client.db('sweetb');
        let data = '';
        if ("_id" in query) {
            query["_id"] = new ObjectId(query["_id"]);
            data = orderQueryObj.retrieveOrderById(query["_id"], databaseObj);
        }else{
            data = orderQueryObj.retrieveAllOrders(databaseObj);
        }
		console.log(data);
        response.statusCode = 200;
        setResponseHeaders(response);
        response.write(JSON.stringify(data));

        // Closing the connection and ending the response.
        await orderQueryObj.client.close();
        await response.end();

	},

	getIngredients: async(request, response) => {
		// Initializing the request URL and the request URL query
		const requestUrl = url.parse(request.url, true);
        const query = requestUrl.query;
		const ingredientsQueryObj = new IngredientsQueries(process.env.PASSWORD);
		
		// Query for all of the ingredients
        await ingredientsQueryObj.client.connect();
        console.log("Connected, getting all ingredients");

        // Retrieve data from MongoDb
        let databaseObj = ingredientsQueryObj.client.db('sweetb');
		let data = '';
		
		
        if ("_id" in query) {
			query["_id"] = new ObjectId(query["_id"]);
			// NB - The Method for querying an ingredient by its Id isn't implemented.
            // data = ingredientsQueryObj.retrieveIngredientById(query["_id"], databaseObj);
        }else{
            data = ingredientsQueryObj.retrieveAllIngredients(databaseObj);
        }
		console.log(data);
        response.statusCode = 200;
        setResponseHeaders(response);
        response.write(JSON.stringify(data));

        // Closing the connection and ending the response.
        await ingredientsQueryObj.client.close();
        await response.end();
	}
};
