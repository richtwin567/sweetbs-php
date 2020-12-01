import { Customer, RealName } from '../data_classes/user.js';

var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")
var fname = document.getElementById("fname")
var lname = document.getElementById("lname")
var card = document.getElementById("card")
var address = document.getElementById("address")
var form = document.getElementById("form")

function createRegisteredCustomer(username, email, password, card, fname, lname, address){
    let myRealname = new RealName(fname.value, lname.value)
    var ResgisteredCustomer = new Customer(username.value, email.value, password.value, card.value, myRealname, address.value)
    console.log(ResgisteredCustomer.getCard());
}

form.addEventListener("submit", (event) =>{
    console.log("here");
    createRegisteredCustomer(username, email, password, card, fname, lname, address);
    window.location.replace('http://localhost:8080/presentation/website/login.php')
    event.preventDefault();
})
//var ResgisteredCostumer = new Customer(username.value, email.value, password.value, name.value, address.value)




