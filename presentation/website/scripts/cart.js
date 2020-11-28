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
	//t.innerHTML+="<table>";
	var header = `
    <h4>Pastry</h4>
    <h4>Name</h4>
    <h4>Unit Price</h4>
    <h4>Quantity</h4>
    <h4>Total per Pastry</h4>
    <h4></h4>
    <hr><hr><hr><hr><hr><hr>
    `;

	//t.innerHTML+=header;
	var body = "";
	var count = 1;
	for (var oitem of olist) {
		if (count % 2 == 0) {
			await oitem
				.exportToCartRow("row-even")
				.then((row) => (body += row));
		}else{
            await oitem
				.exportToCartRow("row-odd")
				.then((row) => (body += row));
        }
        count++;
	}

    var footer = `
    <hr><hr><hr><hr><hr><hr>
    <h4></h4>
	<h4></h4>
    <h4></h4>
    <h4>Subtotal</h4>
    <h4 class="subtotal"></h4>
    <h4></h4>
    `;

	var complete = header + body + footer;
	//console.log(complete);
	t.innerHTML += complete;
}
