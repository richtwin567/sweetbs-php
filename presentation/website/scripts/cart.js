import { getCartCookie } from "../../../aggregation/shopping_cart/cart_agg.js";
import { hideSpinner, showSpinner } from "../../global/scripts/spinner.js";
import { ShoppingCart } from "../../global/data_classes/shopping_cart.js";
import { Order } from "../../../aggregation/data_classes/order.js";
import { OrderItem } from "../../../aggregation/data_classes/order_item.js";
import { getUsername } from "../../../aggregation/accounts/user_agg.js";

var subtotal1 = 0;

getCartCookie()
	.then((res) => {
		console.log(res);
		if (res != null) {
			if (res.length > 0) {
				buildTable(res)
					.then((_) => {
						var checkoutbtn = document.getElementById(
							"checkout-btn"
						);
						checkoutbtn.addEventListener("click", checkoutOrder);
						var incbtns = document.getElementsByClassName("add");
						for (var ibtn of incbtns) {
							ibtn.addEventListener("click", (e) =>
								incrementQty(e)
							);
						}

						var subbtns = document.getElementsByClassName(
							"subtract"
						);
						for (var sbtn of subbtns) {
							sbtn.addEventListener("click", (e) =>
								decrementQty(e)
							);
						}

						var removebtns = document.getElementsByClassName(
							"remove"
						);
						for (var rbtn of removebtns) {
							rbtn.addEventListener("click", (e) =>
								removeCartItem(e)
							);
						}
					})
					.then((_) => hideSpinner())
					.catch((err) => console.log(err));
			} else {
				var empty_cart = document.getElementsByClassName(
					"empty-cart"
				)[0];
				empty_cart.classList.remove("hidden");
				var cart = document.getElementsByClassName("cart-list")[0];
				cart.classList.add("hidden");
				hideSpinner();
			}
		} else {
			var empty_cart = document.getElementsByClassName("empty-cart")[0];
			empty_cart.classList.remove("hidden");
			var cart = document.getElementsByClassName("cart-list")[0];
			cart.classList.add("hidden");
			hideSpinner();
		}
	})
	.catch((err) => console.log(err));

async function buildTable(olist) {
	const t = document.getElementsByClassName("cart-list")[0];

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
		subtotal1 += await oitem.getTotal();
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

	var printtotal = document.getElementsByClassName("subtotal");
	for (var totalarea of printtotal) {
		totalarea.innerHTML =
			"$" +
			new Intl.NumberFormat("JMD", {
				style: "currency",
				currency: "JMD",
			}).format(subtotal1);
	}
}

async function incrementQty(e) {
	var qty = e.target.parentNode.children[1];
	qty.value = parseInt(qty.value) + 1;
	setTimeout((_) => updatePrice(qty.value, e), 500);
}

async function decrementQty(e) {
	var qty = e.target.parentNode.children[1];
	if (!(parseInt(qty.value) <= 1)) {
		qty.value = parseInt(qty.value) - 1;
		setTimeout((_) => updatePrice(qty.value, e), 500);
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
	}).then((_) => {
		console.log(_);
		getCartCookie().then((res) => updateTotal(res));
	});
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
	}).then((_) =>
		getCartCookie().then((res) => {
			setTimeout((_) => updateTotal(res), 500);
			var counter = document.getElementById("cart-counter");
			counter.innerHTML = parseInt(counter.innerHTML) - res.length;
			if (res.length == 0) {
				counter.innerHTML = res.length;
				var checkoutbtn = document.getElementById("checkout-btn");
				checkoutbtn.removeEventListener("click", checkoutOrder);
				var empty_cart = document.getElementsByClassName(
					"empty-cart"
				)[0];
				empty_cart.classList.remove("hidden");
				var cart = document.getElementsByClassName("cart-list")[0];
				cart.classList.add("hidden");
			}
		})
	);
}

async function updateTotal(res) {
	console.log(res);
	var subtotal = 0;
	for (var oitem of res) {
		subtotal += await oitem.getTotal();
	}
	console.log(subtotal);
	var printtotal = document.getElementsByClassName("subtotal");
	for (var totalarea of printtotal) {
		totalarea.innerHTML =
			"$" +
			new Intl.NumberFormat("JMD", {
				style: "currency",
				currency: "JMD",
			}).format(subtotal);
	}
}

async function checkoutOrder() {
	var username;
	getUsername()
		.then((uname) => {
			if (uname == "") {
				window.location.replace("./not_logged_in.php");
			} else {
				username = uname;
				getCartCookie()
					.then((res) => {
						var order = new Order(res, username);
						var cart = new ShoppingCart(order);
						cart.checkout().then((isSuccessful) =>
							/* isSuccessful
								? window.location.href="./success.php"
								: window.location.href="./failed.php" */
						{});
					})
					.catch((err) => console.log(err));
			}
		})
		.catch((err) => console.log(err));
}
