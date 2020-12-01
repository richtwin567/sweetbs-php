import { Customer } from '../data_classes/user.js';

var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")
var name = document.getElementById("name")
var address = document.getElementById("address")
var form = document.getElementById("form")

form.addEventListener("submit", (event) =>{
    console.log("here");
    var ResgisteredCustomer = new Customer(username.value, email.value, password.value, "0000", name.value, address.value)
    console.log(ResgisteredCustomer);
    event.preventDefault();
})
//var ResgisteredCostumer = new Customer(username.value, email.value, password.value, name.value, address.value)




