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
		html += `<span class="price-buy-btn">$${new Intl.NumberFormat('JMD',{style:'currency', currency:'JMD'}).format(this.price)}</span>`;
		html += '</div>';
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

export {MenuItem,getAllMenuItems};