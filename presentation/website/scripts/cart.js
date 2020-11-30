import { getCartCookie } from "../../../aggregation/shopping_cart/cart_agg.js";
import { hideSpinner, showSpinner } from "../../global/scripts/spinner.js";

getCartCookie()
	.then((res) => {
		var subtotal = 0;

		console.log(res);
		if (res.length > 0) {
			buildTable(res)
				.then((_) => {
					var incbtns = document.getElementsByClassName("add");
					for (var ibtn of incbtns) {
						ibtn.addEventListener("click", (e) => incrementQty(e));
					}

					var subbtns = document.getElementsByClassName("subtract");
					for (var sbtn of subbtns) {
						sbtn.addEventListener("click", (e) => decrementQty(e));
					}

					var removebtns = document.getElementsByClassName("remove");
					for (var rbtn of removebtns) {
						rbtn.addEventListener("click", (e) =>
							removeCartItem(e)
						);
					}
					updateTotal(res).catch((err) => console.log(err));
				})
				.then((_) => hideSpinner())
				.catch((err) => console.log(err));
		}
	})
	.catch((err) => console.log(err));

async function buildTable(olist) {
	const t = document.getElementById("cart-list");

	var header = `
    <h4 class="header">Pastry</h4>
    <h4 class="header">Name</h4>
    <h4 class="header">Unit Price</h4>
    <h4 class="header">Quantity</h4>
    <h4 class="header">Total per Pastry</h4>
    <h4 class="header"></h4>
    <hr><hr><hr><hr><hr><hr>
    `;

	var body = "";
	var count = 1;
	for (var oitem of olist) {
		if (count % 2 == 0) {
			await oitem
				.exportToCartRow("row-even")
				.then((row) => (body += row));
		} else {
			await oitem.exportToCartRow("row-odd").then((row) => (body += row));
		}
		count++;
	}

	var footer = `
    <hr><hr><hr><hr><hr><hr>
    <h4 class="footer"></h4>
	<h4 class="footer"></h4>
    <h4 class="footer"></h4>
    <h4 class="footer">Subtotal</h4>
    <h4 class="footer subtotal"></h4>
    <h4 class="footer"></h4>
    `;

	var complete = header + body + footer;
	t.innerHTML += complete;
}

async function incrementQty(e) {
	var qty = e.target.parentNode.children[1];
	qty.value = parseInt(qty.value) + 1;
	await updatePrice(qty.value, e);
}

async function decrementQty(e) {
	var qty = e.target.parentNode.children[1];
	if (!(parseInt(qty.value) <= 1)) {
		qty.value = parseInt(qty.value) - 1;
		await updatePrice(qty.value, e);
	}
}

async function updatePrice(qty, e) {
	var thisitem = e.target.parentNode;
	var priceunit = thisitem.previousElementSibling;
	var pricetotal = thisitem.nextElementSibling;
	var price_with_comma = priceunit.innerHTML.split(";")[1];
	var priceunit = parseFloat(price_with_comma.split(",").join(""));
	pricetotal.innerHTML = `$${new Intl.NumberFormat("JMD", {
		style: "currency",
		currency: "JMD",
	}).format(priceunit * parseInt(qty))}`;
	var mitemid = thisitem.previousElementSibling.previousElementSibling.id;
	var data = JSON.parse(`{"id":"${mitemid}", "newqty":${qty}}`);
	fetch("scripts/cart_updater.php", {
		method: "POST",
		body: JSON.stringify(data),
	}).then(_=>{
		console.log(_);
	getCartCookie().then((res) => updateTotal(res))});
}

async function removeCartItem(e) {
	var thisitem = e.target;
	console.log(thisitem);
	var div = thisitem.parentNode;
	var total = div.previousElementSibling;
	var qty = total.previousElementSibling;
	var price = qty.previousElementSibling;
	var name = price.previousElementSibling;
	var image = name.previousElementSibling;

	var mitemid = name.id;

	thisitem.remove();
	total.remove();
	qty.remove();
	price.remove();
	name.remove();
	div.remove();
	image.remove();

	var data = JSON.parse(`{"id":"${mitemid}", "remove":"remove"}`);
	fetch("scripts/cart_updater.php", {
		method: "POST",
		body: JSON.stringify(data),
	}).then(_=>
	getCartCookie().then((res) => updateTotal(res)));
}

async function updateTotal(res) {
	console.log(res);
	var printtotal = document.getElementsByClassName("subtotal");
	var subtotal = 0;
	for (var oitem of res) {
		subtotal += await oitem.getTotal();
	}
	console.log(subtotal);
	for (var totalarea of printtotal) {
		totalarea.innerHTML =
			"$" +
			new Intl.NumberFormat("JMD", {
				style: "currency",
				currency: "JMD",
			}).format(subtotal);
	}
}
