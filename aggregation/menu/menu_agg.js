import {MenuItem} from "../data_classes/menu_item.js";

async function getMenuItems(queryString) {
	return await fetch("https://sweetbs-backend.herokuapp.com/menuitems"+queryString, {
		method: "GET",
		headers: {
			"Content-Type": "Application/json",
		},
	})
		.then((res) => res.json())
		.then((data) => {
			var menulist=[];
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

export {getMenuItems};
