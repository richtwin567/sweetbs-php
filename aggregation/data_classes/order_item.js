import { getMenuItems } from "../menu/menu_agg.js";

class OrderItem {
	#qty = 1;
	#item;
	constructor(id, qty = 1) {
		this.#qty = qty;
		this.#item = id;
	}

	getQty() {
		return this.#qty;
	}

	setQty(newQty) {
		this.#qty = newQty;
	}

	getMenuItem() {
		return this.#item;
	}

	async getTotal() {
		return getMenuItems("?_id=" + this.getMenuItem())
			.then((i) => {
				return i[0].getPrice() * this.getQty();
			})
			.catch((err) => console.log(err));
	}

	async exportToCartRow(clss) {
		return getMenuItems("?_id=" + this.getMenuItem())
			.then((item) => {
				console.log(item);
				item = item[0];
				var unitpricef = `$${new Intl.NumberFormat("JMD", {
					style: "currency",
					currency: "JMD",
				}).format(item.getPrice())}`;

				var totalpricef = `$${new Intl.NumberFormat("JMD", {
					style: "currency",
					currency: "JMD",
				}).format(item.getPrice() * this.getQty())}`;

				return `
                <img src="../../presentation/global/images/cheesecake1.jpg" class="feature-img ${clss}">
                <p id="${item.getId()}" class="${clss}">${item.getName()}</p>
                <p class="${clss}">${unitpricef}</p>
                    <div class="qty-counter ${clss}">
                        <img class="add" src="../../presentation/global/icons/add_circle-purple-48dp.svg">
                        <input name="qty" class="qty" value="${this.getQty()}" type="number" min="1" readonly>
						<img class="subtract" src="../../presentation/global/icons/remove_circle-purple-48dp.svg">
						<input type="hidden" name="mid" form="order-form" value="${item.getId()}">
                </div>
                <p class="total-pastry-price ${clss}">${totalpricef}</p>
                <div class="${clss} remove-div"><img src="../../presentation/global/icons/cancel-coral-48dp.svg" class="remove"></div>
            `;
			})
			.catch((err) => console.log(err));
	}
}

export { OrderItem };
