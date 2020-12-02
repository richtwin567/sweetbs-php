const http = require("http");
const url = require("url");
const ctrl = require("./controller.js");
const { CustomerInsertQuery, OrderInsertQuery } = require('./db/insert_queries');



module.exports = http.createServer((req, res) => {
	const reqUrl = url.parse(req.url, true);
	console.log(req.method);
	console.log(reqUrl.pathname);
	if (req.method == "OPTIONS") {
		ctrl.fetchOptions(req, res).catch((err) => console.log(err));
	}
	switch (reqUrl.pathname) {
		case "/users":
			handleUsersRequest(req, res);
			break;

		case "/orders":
			handleOrdersRequest(req, res);
			break;

		case "/orderitems":
			handleOrderItemsRequest(req, res);
			break;

		case "/menuitems":
			handleMenuItemsRequest(req, res);
			break;

		case "/ingredients":
			handleIngredientsRequest(req, res);
			break;

		default:
			break;
	}
});

function handleIngredientsRequest(req, res) {
	switch (req.method) {
		case "GET":
			ctrl.getIngredients(req, res).catch((err) => console.log(err));
			break;
		case "POST":
			break;
		case "PATCH":
			break;
		case "DELETE":
			break;
		default:
			break;
	}
}

function handleMenuItemsRequest(req, res) {
	switch (req.method) {
		case "GET":
			ctrl.getMenuItems(req, res).catch((err) => console.log(err));
			break;
		case "POST":
			break;
		case "PATCH":
			break;
		case "DELETE":
			break;
		default:
			break;
	}
}

function handleOrderItemsRequest(req, res) {
	switch (req.method) {
		case "GET":
			ctrl.getOrderItems(req, res).catch((err) => console.log(err));
			break;
		case "POST":
			break;
		case "PATCH":
			break;
		case "DELETE":
			break;
		default:
			break;
	}
}

function handleOrdersRequest(req, res) {
	switch (req.method) {
		case "GET":
			ctrl.getOrders(req,res).catch((err) => console.log(err));
			break;
		case "POST":
			let orderq = new OrderInsertQuery();
			orderq.insertOneOrder(req).catch(err=>console.log(err));
			setResponseHeaders(res);
			res.end();
			break;
		case "PATCH":
			break;
		case "DELETE":
			break;
		default:
			break;
	}
}

function handleUsersRequest(req,res) {
	switch (req.method) {
		case "GET":
			ctrl.getUser(req,res).catch(err=>console.log(err));
			break;
		case "POST":
			let insertQueryObj = new CustomerInsertQuery();
			// Assuming that the request contains the document to be inserted
			// This may not be the most secure solution
			console.log(req);
			const reqUrl = url.parse(req.url, true);
			insertQueryObj.insertOneCustomer(reqUrl.query).catch(err=>console.log(err));
			setResponseHeaders(res);
			res.end();
			break;
		case "PATCH":
			break;
		case "DELETE":
			break;
		default:
			break;
	}
}


function setResponseHeaders(response) {
	response.setHeader("Content-Type", "Application/json");
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
	response.setHeader("Access-Control-Allow-Headers", "Content-Type");
}
