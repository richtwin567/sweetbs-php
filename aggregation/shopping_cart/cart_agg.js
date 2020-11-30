import { OrderItem } from "../data_classes/order_item.js";

async function getCartCookie() {
	return await fetch("../../aggregation/shopping_cart/cart_php_to_js.php")
		.then((res) => res.json())
		.then((data) => {
			const list = [];
			if (data instanceof Array) {
				for (var item of data) {
					console.log(item);
					list.push(new OrderItem(item["menuitemid"], item["qty"]));
				}
			} else {
				list.push(new OrderItem(data["menuitemid"], data["qty"]));
			}
			console.log(list);
			return list;
		})
		.catch((err) => console.log(err));
}

export { getCartCookie };
