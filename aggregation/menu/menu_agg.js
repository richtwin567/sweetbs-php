class MenuItem {
	constructor(id, name, desc, price, picturelink, ingredient_ids) {
		this.id = id;
		this.name = name;
		this.desc = desc;
		this.price = price;
		this.picturelink = picturelink;
		this.ingredient_ids = ingredient_ids;
	}

	//get ingredients() {}

	exportToHtmlTile() {
		var priceformatted = `$${new Intl.NumberFormat("JMD", {
			style: "currency",
			currency: "JMD",
		}).format(this.price)}`;
		var html = "";
		//html += `<img class="feature-img" src="${this.picturelink}">`;

		html += `<div id="${this.id}" class="menu-tile">
					<img class="feature-img" src="../../presentation/global/images/cheesecake2.jpg">
					<div class="menu-item-info">
						<h3>${this.name}</h3>
						<p class="menu-item-desc hidden">${this.desc}</p>
						<form id="${this.id}-form" class="qty-price hidden" method="post" action="menu.php">
							<input type="hidden" name="itemid" value="${this.id}">
							<h4>Quantity</h4>
							<h4>Price</h4>
							<div class="qty-counter">
								<img class="add" src="../../presentation/global/icons/add_circle-purple-48dp.svg">
								<input name="qty" class="qty" value="1" type="number" min="1">
								<img class="subtract" src="../../presentation/global/icons/remove_circle-purple-48dp.svg">
							</div>
							<input type="hidden" class="raw-price" name="raw-price" value="${this.price}">
							<p class="price">${priceformatted}</p>
						</form>
						<div class="action-btns hidden">
							<button type="submit" form="${this.id}-form" class="btn btn-regular">ADD TO CART</button>
							<a href="#" class="btn btn-critical cancel">CANCEL</a>
						</div>
						<span class="price-buy-btn">${priceformatted}</span>
					</div>
					<img class="close hidden" src="../../presentation/global/icons/clear-coral-48dp.svg">
				</div>`;
		return html;
	}
}

const menulist = [];

async function getMenuItems(queryString) {
	return await fetch("http://127.0.0.1:3000/menuitems"+queryString, {
		method: "GET",
		headers: {
			"Content-Type": "Application/json",
		},
	})
		.then((res) => res.json())
		.then((data) => {
			for (var el of data) {
				menulist.push(
					new MenuItem(
						el["_id"],
						el["name"],
						el["description"],
						el["price"],
						el["picturelink"],
						el["ingredient_ids"]
					)
				);
			}
			return menulist;
		})
		.catch((err) => console.log(err));
}

export { MenuItem, getMenuItems};
