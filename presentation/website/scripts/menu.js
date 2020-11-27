import { getAllMenuItems } from "../../../aggregation/menu/menu_agg.js";
import { showSpinner, hideSpinner } from "../../global/scripts/spinner.js";

var menuitems;
showSpinner();
getAllMenuItems()
	.then((menulist) => {
		var menuarea = document.getElementById("menu");
		for (var item of menulist) {
			menuarea.innerHTML += item.exportToHtmlTile();
		}
		var count = 1;
		for (var tile of menuarea.children) {
			tile.classList.add("" + count);
			tile.style.order = count;
			count++;
		}
		return menulist;
	})
	.then((mlist) => {
		menuitems = mlist;
		var buybtns = document.getElementsByClassName("price-buy-btn");
		for (var btn of buybtns) {
			btn.addEventListener("click", (e) => open(e));
		}
		var closebtns = document.getElementsByClassName("close");
		console.log(closebtns);
		for (var cbtn of closebtns) {
			cbtn.addEventListener("click", (e) => close(e.target));
		}

		var cancelbtns = document.getElementsByClassName("cancel");
		for (var cnlbtn of cancelbtns) {
			cnlbtn.addEventListener("click", (e) =>
				close(e.target.parentNode.parentNode)
			);
		}

		var incbtns = document.getElementsByClassName("add");
		for (var ibtn of incbtns) {
			ibtn.addEventListener("click", (e) => incrementQty(e));
		}

		var subbtns = document.getElementsByClassName("subtract");
		for (var sbtn of subbtns) {
			sbtn.addEventListener("click", (e) => decrementQty(e));
		}
		hideSpinner();
	})
	.catch((err) => console.log(err));

function close(e) {
	const tileids = e.parentNode.classList;
	const tile = e.parentNode;
	console.log(tile);
	var sib1;
	var sib2;
	tile.classList.add("menu-tile");
	tile.classList.remove("expanded-menu-tile");
	var c = tile.children;
	console.log(c);

	c[2].classList.add("hidden");

	var cchil = c[1].children;

	cchil[1].classList.add("hidden");
	cchil[2].classList.add("hidden");
	cchil[3].classList.add("hidden");

	cchil[4].classList.remove("hidden");

	setTimeout(() => {
		if (
			tileids.contains("1") ||
			tileids.contains("2") ||
			tileids.contains("3")
		) {
			if (tileids.contains("1")) {
				console.log("tr");
				tile.style.order = 1;
			}
			if (tileids.contains("2")) {
				console.log("pad");
				sib1 = document.getElementsByClassName("1")[0];
				sib1.style.order = 1;
				tile.style.order = 2;
			}
			if (tileids.contains("3")) {
				console.log("in");
				sib1 = document.getElementsByClassName("1")[0];
				sib1.style.order = 1;
				sib2 = document.getElementsByClassName("2")[0];
				sib2.style.order = 2;
				tile.style.order = 3;
			}
		} else if (
			tileids.contains("4") ||
			tileids.contains("5") ||
			tileids.contains("6")
		) {
			if (tileids.contains("4")) {
				console.log("tr");
				tile.style.order = 4;
			}
			if (tileids.contains("5")) {
				console.log("pad");
				sib1 = document.getElementsByClassName("4")[0];
				sib1.style.order = 4;
				tile.style.order = 5;
			}
			if (tileids.contains("6")) {
				console.log("in");
				sib1 = document.getElementsByClassName("4")[0];
				sib1.style.order = 4;
				sib2 = document.getElementsByClassName("5")[0];
				sib2.style.order = 5;
				tile.style.order = 6;
			}
		} else {
			if (tileids.contains("7")) {
				console.log("tr");
				tile.style.order = 7;
			}
			if (tileids.contains("8")) {
				console.log("pad");
				sib1 = document.getElementsByClassName("7")[0];
				sib1.style.order = 7;
				tile.style.order = 8;
			}
			if (tileids.contains("8")) {
				console.log("in");
				sib1 = document.getElementsByClassName("7")[0];
				sib1.style.order = 7;
				sib2 = document.getElementsByClassName("8")[0];
				sib2.style.order = 8;
				tile.style.order = 9;
			}
		}
	}, 200);
}

function open(e) {
	const tileids = e.target.parentNode.parentNode.classList;
	const tile = e.target.parentNode.parentNode;
	console.log(tile);
	console.log(tileids);
	var sib1;
	var sib2;
	var ex = document.querySelector(".expanded-menu-tile");
	console.log(ex);
	if (!ex) {
		if (
			tileids.contains("1") ||
			tileids.contains("2") ||
			tileids.contains("3")
		) {
			if (tileids.contains("1")) {
				console.log("tr");
			}
			if (tileids.contains("2")) {
				console.log("pad");
				sib1 = document.getElementsByClassName("1")[0];
				sib1.style.order = 2;
			}
			if (tileids.contains("3")) {
				console.log("in");
				sib1 = document.getElementsByClassName("1")[0];
				sib1.style.order = 2;
				sib2 = document.getElementsByClassName("2")[0];
				sib2.style.order = 3;
			}
			tile.style.order = 1;
		} else if (
			tileids.contains("4") ||
			tileids.contains("5") ||
			tileids.contains("6")
		) {
			if (tileids.contains("4")) {
				console.log("tr");
			}
			if (tileids.contains("5")) {
				console.log("pad");
				sib1 = document.getElementsByClassName("4")[0];
				sib1.style.order = 5;
			}
			if (tileids.contains("6")) {
				console.log("in");
				sib1 = document.getElementsByClassName("4")[0];
				sib1.style.order = 5;
				sib2 = document.getElementsByClassName("5")[0];
				sib2.style.order = 6;
			}
			tile.style.order = 4;
		} else {
			if (tileids.contains("7")) {
				console.log("tr");
			}
			if (tileids.contains("8")) {
				console.log("pad");
				sib1 = document.getElementsByClassName("7")[0];
				sib1.style.order = 8;
			}
			if (tileids.contains("9")) {
				console.log("in");
				sib1 = document.getElementsByClassName("7")[0];
				sib1.style.order = 8;
				sib2 = document.getElementsByClassName("8")[0];
				sib2.style.order = 9;
			}
			tile.style.order = 7;
		}
		setTimeout(() => {
			tile.classList.add("expanded-menu-tile");
			tile.classList.remove("menu-tile");
			var c = tile.children;
			console.log(c);

			c[2].classList.remove("hidden");

			var cchil = c[1].children;

			cchil[1].classList.remove("hidden");
			cchil[2].classList.remove("hidden");
			cchil[3].classList.remove("hidden");

			cchil[4].classList.add("hidden");
		}, 200);
	}
}

function incrementQty(e) {
	var qty = e.target.parentNode.children[1];
	qty.value = parseInt(qty.value) + 1;
	updatePrice(qty.value, e);
}

function decrementQty(e) {
	var qty = e.target.parentNode.children[1];
	if (!(parseInt(qty.value) <= 1)) {
		qty.value = parseInt(qty.value) - 1;
		updatePrice(qty.value, e);
	}
}

function updatePrice(qty, e) {
	var pricediv = e.target.parentNode.parentNode.children[5];
	console.log(pricediv);
	var priceval = parseFloat(e.target.parentNode.parentNode.children[4].value);
	pricediv.innerHTML = `$${new Intl.NumberFormat("JMD", {
		style: "currency",
		currency: "JMD",
	}).format(priceval * parseInt(qty))}`;
}
