import { getCartCookie } from "../../../aggregation/shopping_cart/cart_agg.js";
import { hideSpinner, showSpinner } from "../../global/scripts/spinner.js";
//console.log(document.cookie);

getCartCookie()
	.then((res) => {
		console.log(res);
		if (res.length > 0) {
			buildTable(res)
				.then((_) => hideSpinner())
				.catch((err) => console.log(err));
		}
	})
	.catch((err) => console.log(err));

async function buildTable(olist) {
	const t = document.getElementById("cart-list");
	for (var oitem of olist) {
		await oitem.exportToCartRow().then((row) => (t.innerHTML += row));
	}
}
