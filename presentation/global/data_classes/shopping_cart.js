import {} from "../../../aggregation/data_classes/order.js";

class ShoppingCart {
	#order;

	constructor(order) {
		this.#order = order;
	}

	async checkout() {
        var jsonorder = this.#order.toMongoJSON();
        console.log(jsonorder);
		return fetch("https://sweetbs-backend.herokuapp.com/orders", {
			method: "POST",
			body: jsonorder,
		}).then((res) => (res.status == 200 ? true : false));
	}

	cancel() {}
}

export { ShoppingCart };
