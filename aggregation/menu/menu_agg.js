class MenuItem {
	constructor(id, name, desc, price, picturelink, ingredient_ids) {
		this.id = id;
		this.name = name;
		this.desc = desc;
		this.price = price;
		this.picturelink = picturelink;
		this.ingredient_ids = ingredient_ids;
	}

	get ingredients() {}

	exportToHtmlTile() {
		var html = "";
		html += `<div id="${this.id}" class="menu-tile">`;
		html += `<img src="${this.picturelink}">`;
		html += '<div class="menu-item-info">';
		html += `<h3>${this.name}</h3>`;
		html += `<p class="menu-item-desc hidden">${this.desc}</p>`;
		html += '<div class="qty-price hidden">';
		html += "<h4>Quantity</h4><h4>Price</h4>";
		html += '<div class="qty-counter">';
		html +=
			'<img class="add" src="../../presentation/global/icons/add_circle-purple-48dp.svg">';
		html += '<div class="qty">1</div>';
		html +=
			'<img class="subtract" src="../../presentation/global/icons/remove_circle-purple-48dp.svg">';
		html += "</div>";
		html += `<p class="price">$${new Intl.NumberFormat("JMD", {
			style: "currency",
			currency: "JMD",
		}).format(this.price)}</p>`;
		html += "</div>";
		html += '<div class="action-btns hidden">';
		html +=
			'<a href="#" class="btn btn-regular">ADD TO CART</a><a href="#" class="btn btn-critical">CANCEL</a>';
		html += "</div>";
		html += `<span class="price-buy-btn">$${new Intl.NumberFormat("JMD", {
			style: "currency",
			currency: "JMD",
		}).format(this.price)}</span>`;
		html += "</div>";
		html +=
			'<img class="close hidden" src="../../presentation/global/icons/clear-coral-48dp.svg">';
		html += "</div>";
		return html;
	}
}

const menulist = [];

async function getAllMenuItems() {
	return await fetch("http://127.0.0.1:3000/menuitems", {
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

export { MenuItem, getAllMenuItems };
