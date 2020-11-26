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

	get exportToHtmlTile() {
		var html = "";
		html += '<div class="menu-tile">';
		html += `<img src="${this.picturelink}">`;
		html += '<div class="menu-item-info">';
		html += `<h3>${this.name}</h3>`;
		html += `<p class="menu-item-desc hidden">${this.desc}</p>`;
		html += `<span class="price-buy-btn">$${this.price}</span>`;
		html += '</div>';
		html += "</div>";
		return html;
	}
}

const menulist = [];

async function getAllMenuItems() {
	await fetch("http://127.0.0.1:3000/menuitems", {
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
		})
		.catch((err) => console.log(err));
}

getAllMenuItems().then((r) => {
	var menuarea = document.getElementById("menu");
	for (var item of menulist) {
		menuarea.innerHTML += item.exportToHtmlTile;
	}
});
