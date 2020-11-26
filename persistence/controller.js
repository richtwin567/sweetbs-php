const url = require("url");
//const users = require("./userData.js");
const MongoClient = require("mongodb").MongoClient;

const dburi = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTERURL}/?authMechanism=${AUTHMETH}`;


module.exports = {
	fetchOptions:async(req,res)=>{
		res.statusCode=200;
		res.setHeader("Access-Control-Allow-Origin","*");
		res.setHeader('Access-Control-Allow-Methods', "GET,PATCH,DELETE,POST");	
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
		res.setHeader("Content-Type", "text/html");
		res.end();
	},
	getMenuItems: async (req, res) => {
		const reqUrl = url.parse(req.url, true);
		const client = new MongoClient(dburi, { useNewUrlParser:true,useUnifiedTopology: true });
		//console.log(reqUrl);
		var response;
		await client.connect();
		await client.db("admin").command({ ping: 1 });
		console.log("Connected");
		var col = client.db("sweetb").collection("menuitems");
		//console.log(col);
        var curs = await col.find({}).toArray();
        //console.log(curs);
        res.statusCode=200;
        //res.set("Connection", "close").catch(err=>console.log(err));
        res.setHeader("Content-Type", "Application/json");
        res.setHeader("Access-Control-Allow-Origin","*");
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.write(JSON.stringify(curs));
        await client.close();
        await res.end();
	},

	getUsers: (req, res) => {
		const reqUrl = url.parse(req.url, true);

		
	},

	createUser: (req, res) => {
		body = "";

		req.on("data", function (chunk) {
			body += chunk;
		});

		req.on("end", function () {
			postBody = JSON.parse(body);
			var response = [
				{
					text: "User added successfully",
				},
				postBody,
			];

			res.statusCode = 201;
			res.setHeader("content-Type", "Application/json");
			res.end(JSON.stringify(response));
		});
	},
	invalidUrl: (req, res) => {
		var response = [
			{
				message:
					"oops! that is a wrong endpoint, here are the available endpoints ",
			},
			availableEndpoints,
		];
		res.statusCode = 404;
		res.setHeader("content-Type", "Application/json");
		res.end(JSON.stringify(response));
	},
};
