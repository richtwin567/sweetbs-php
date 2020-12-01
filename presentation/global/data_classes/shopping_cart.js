import {} from "../../../aggregation/data_classes/order.js";

class ShoppingCart {
	#order;

	constructor(order) {
		this.#order = order;
	}

	async checkout() {
		var jsonorder = this.#order.toMongoJSON();
		return fetch("http://127.0.0.1:3000/orders", {
			method: "POST",
			body: jsonorder,
		}).then((res) => (res.status == 200 ? true : false));
	}

	cancel() {}
}

export { ShoppingCart };
