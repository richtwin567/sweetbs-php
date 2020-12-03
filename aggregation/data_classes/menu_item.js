class MenuItem {
	#id;
	#name;
	#description;
	#price;
	#picturelink;
    #ingredient_ids;

	constructor(id, name, desc, price, picturelink, ingredient_ids) {
		this.#id = id;
		this.#name = name;
		this.#description = desc;
		this.#price = price;
		this.#picturelink = picturelink;
		this.#ingredient_ids = ingredient_ids;
	}

	getPrice() {
		return this.#price;
	}

	getName() {
		return this.#name;
	}

	getPicture() {
		return this.#picturelink;
	}

	getDescription() {
		return this.#description;
	}

	getIngredients() {
		//TODO: Implement db query for ingredients
		return this.#ingredient_ids;
	}

	getId() {
		return this.#id;
	}

	setPrice(newPrice) {
		this.#price = newPrice;
	}

	setName(newName) {
		this.#name = newName;
	}

	setPicture(newUrl) {
		this.#picturelink = newUrl;
	}

	setDescription(newDesc) {
		this.#description = newDesc;
	}

	exportToHtmlTile() {
		var priceformatted = `$${new Intl.NumberFormat("JMD", {
			style: "currency",
			currency: "JMD",
		}).format(this.getPrice())}`;
		var html = "";
		//html += `<img class="feature-img" src="${this.picturelink}">`;

		html +=
		`<div id="${this.getId()}" class="menu-tile">
			<img class="feature-img" src="../../presentation/global/images/cheesecake2.jpg">
			<div class="menu-item-info">
				<h3>${this.getName()}</h3>
				<p class="menu-item-desc hidden">${this.getDescription()}</p>
				<form id="${this.getId()}-form" class="qty-price hidden" method="post" action="menu.php">
					<input type="hidden" name="itemid" value="${this.getId()}">
					<h4>Quantity</h4>
					<h4>Price</h4>
					<div class="qty-counter">
						<img class="add" src="../../presentation/global/icons/add_circle-purple-48dp.svg">
						<input name="qty" class="qty" value="1" type="number" min="1" readonly>
						<img class="subtract" src="../../presentation/global/icons/remove_circle-purple-48dp.svg">
					</div>
					<input type="hidden" class="raw-price" name="raw-price" value="${this.getPrice()}">
					<p class="price">${priceformatted}</p>
				</form>
				<div class="action-btns hidden">
					<button type="submit" form="${this.getId()}-form" class="btn btn-regular">ADD TO CART</button>
					<button class="btn btn-critical cancel">CANCEL</button>
				</div>
				<span class="price-buy-btn">${priceformatted}</span>
			</div>
			<img class="close hidden" src="../../presentation/global/icons/clear-coral-48dp.svg">
		</div>`;
		return html;
	}
}

export { MenuItem };
