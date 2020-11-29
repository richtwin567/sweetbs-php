import { OrderItem } from "../data_classes/order_item.js";

async function getCartCookie() {
	return await fetch("../../aggregation/shopping_cart/cart_php_to_js.php")
		.then((res) => res.json())
		.then((data) => {
			const list = [];
			for (var item of data) {
                console.log(item);
				list.push(new OrderItem(item["menuitemid"], item["qty"]));
            }
            return list;
		})
		.catch((err) => console.log(err));
}

export { getCartCookie };
