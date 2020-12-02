class Order {
	#id;
	#customer;
	#items = [];

	constructor(items, customer, id = null) {
		this.#items = items;
		this.#customer = customer;
		this.#id = id;
	}

	getOrderItems() {
		return this.#items;
	}

	getCustomer() {
		return this.#customer;
	}

	getOrderId() {
		return this.#id;
	}

	addOrderItem(orderitem) {
		this.#items.push(orderitem);
	}

    toMongoJSON(){
        var jsonarray = [];
        for (var oitem of this.getOrderItems()) {
            jsonarray.push(oitem.toObject());
        }
        console.log(this.getCustomer());
        return JSON.stringify({customer:this.getCustomer()["username"],items:jsonarray});
    }
}

export { Order };
