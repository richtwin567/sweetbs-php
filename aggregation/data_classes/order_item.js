import { getMenuItems } from "../menu/menu_agg.js";

class OrderItem {
    #qty =1;
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

	async exportToCartRow() {
		return await getMenuItems("?_id=" + this.getMenuItem())
			.then((item) => {
                item=item[0];
				var unitpricef = `$${new Intl.NumberFormat("JMD", {
					style: "currency",
					currency: "JMD",
				}).format(item.getPrice())}`;

				var totalpricef = `$${new Intl.NumberFormat("JMD", {
					style: "currency",
					currency: "JMD",
				}).format(item.getPrice() * this.getQty())}`;

				return `
            <tr>
                <td><img src="../../presentation/global/images/cheesecake1.jpg" class="feature-img"></td>
                <td>${item.getDescription()}</td>
                <td>${unitpricef}</td>
                <td>
                    <div class="qty-counter">
                        <img class="add" src="../../presentation/global/icons/add_circle-purple-48dp.svg">
                        <input name="qty" class="qty" value="${
							this.getQty()
						}" type="number" min="1">
                        <img class="subtract" src="../../presentation/global/icons/remove_circle-purple-48dp.svg">
                    </div>
                </td>
                <td class="total-price">${totalpricef}</td>
                <td><img src="../../presentation/global/icons/cancel-coral-48dp.svg" class="remove"></td>
            </tr>
            `;
			})
			.catch((err) => console.log(err));
	}
}

export { OrderItem };
