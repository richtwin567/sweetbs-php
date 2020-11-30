const http = require("http");
const url = require("url");
const ctrl = require("./controller.js");

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
			ctrl.getOrders(req,res).catch((err) => console.log(err));;
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

function handleUsersRequest(req) {
	switch (req.method) {
		case "GET":
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
