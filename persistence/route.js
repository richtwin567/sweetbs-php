const http = require("http");
const url = require("url");

module.exports = http.createServer((req, res) => {
	var ctrl = require("./controller.js");
	const reqUrl = url.parse(req.url, true);
	//console.log(reqUrl.pathname);
	//console.log(req.method);
	switch (reqUrl.pathname) {
		case "/users":
			switch (req.method) {
                case "OPTIONS":
                    ctrl.fetchOptions();
					break;
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
			break;

		case "/orders":
			switch (req.method) {
                case "OPTIONS":
                    ctrl.fetchOptions();
					break;
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
			break;

		case "/orderitems":
			switch (req.method) {
                case "OPTIONS":
                    ctrl.fetchOptions();
					break;
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
			break;

		case "/menuitems":
			switch (req.method) {
				case "OPTIONS":
                    ctrl.fetchOptions(req, res);
                    break;
				case "GET":
					ctrl.getMenuItems(req, res);
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
			break;

		case "/ingredients":
			switch (req.method) {
                case "OPTIONS":
                    ctrl.fetchOptions();
					break;
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
			break;

		default:
			break;
	}
});
