import { getAllMenuItems } from "../../../aggregation/menu/menu_agg.js";
import { showSpinner, hideSpinner } from "../../global/scripts/spinner.js";

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
		var buybtns = document.getElementsByClassName("price-buy-btn");
		for (var btn of buybtns) {
			btn.addEventListener("click", (e) => {
				const tileid = e.target.parentNode.parentNode.classList[1];
				const tile = e.target.parentNode.parentNode;
				console.log(tile);
				console.log(tileid);
				var sib1;
				var sib2;
				var ex = document.querySelector(".expanded-menu-tile");
				console.log(ex);
				if (!ex) {
					if (["1", "2", "3"].includes(tileid)) {
						if (tileid == "1") {
							console.log("tr");
						}
						if (tileid == "2") {
							console.log("pad");
							sib1 = document.getElementsByClassName("1")[0];
							sib1.style.order = 2;
						}
						if (tileid == "3") {
							console.log("in");
							sib1 = document.getElementsByClassName("1")[0];
							sib1.style.order = 2;
							sib2 = document.getElementsByClassName("2")[0];
							sib2.style.order = 3;
						}
						tile.style.order = 1;
					} else if (["4", "5", "6"].includes(tileid)) {
						if (tileid == "4") {
							console.log("tr");
						}
						if (tileid == "5") {
							console.log("pad");
							sib1 = document.getElementsByClassName("4")[0];
							sib1.style.order = 5;
						}
						if (tileid == "6") {
							console.log("in");
							sib1 = document.getElementsByClassName("4")[0];
							sib1.style.order = 5;
							sib2 = document.getElementsByClassName("5")[0];
							sib2.style.order = 6;
						}
						tile.style.order = 4;
					} else {
						if (tileid == "7") {
							console.log("tr");
						}
						if (tileid == "8") {
							console.log("pad");
							sib1 = document.getElementsByClassName("7")[0];
							sib1.style.order = 8;
						}
						if (tileid == "9") {
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
					}, 500);

					//.style.backgroundColor="red";
					//btn.style.gridColumn = "1/4";})
				}
			});

			/*if (["1", "2", "3"].includes(ex.id)) {
						if (ex.id == "1") {
							console.log("tr");
						}
						if (ex.id == "2") {
							console.log("pad");
							sib1 = document.getElementsByClassName("1")[0];
							sib1.style.order = 1;
						}
						if (ex.id == "3") {
							console.log("in");
							sib1 = document.getElementsByClassName("1")[0];
							sib1.style.order = 1;
							sib2 = document.getElementsByClassName("2")[0];
							sib2.style.order = 2;
						}
					} else if (["4", "5", "6"].includes(tileid)) {
						if (ex.id == "4") {
							console.log("tr");
						}
						if (ex.id == "5") {
							console.log("pad");
							sib1 = document.getElementsByClassName("4")[0];
							sib1.style.order = 4;
						}
						if (ex.id == "6") {
							console.log("in");
							sib1 = document.getElementsByClassName("4")[0];
							sib1.style.order = 4;
							sib2 = document.getElementsByClassName("5")[0];
							sib2.style.order = 5;
						}
					} else {
						if (ex.id == "7") {
							console.log("tr");
						}
						if (ex.id == "8") {
							console.log("pad");
							sib1 = document.getElementsByClassName("7")[0];
							sib1.style.order = 7;
						}
						if (ex.id == "9") {
							console.log("in");
							sib1 = document.getElementsByClassName("7")[0];
							sib1.style.order = 7;
							sib2 = document.getElementsByClassName("8")[0];
							sib2.style.order = 8;
						}
					}
					ex.classList.toggle("expanded-menu-tile");
					ex.classList.toggle("menu-tile");


					ex.style.flexBasis = "";
					ex.style.order = ex.classList[1];*/
			hideSpinner();
		}
	})
	.catch((err) => console.log(err));
