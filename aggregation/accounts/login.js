import { Costumer } from '../../../UWI-COMP2140-Project/persistence/data_classes/user.js';

var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")
var name = document.getElementById("name")
var address = document.getElementById("address")

var ResgisteredCostumer = new Costumer(username, email, password, name, address)
console.log(ResgisteredCostumer.getRealName())