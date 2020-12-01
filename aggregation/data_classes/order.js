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
        return JSON.stringify({customer:this.getCustomer(),items:jsonarray});
    }
}

export { Order };
