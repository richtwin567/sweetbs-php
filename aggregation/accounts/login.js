console.log("here");
(async () => {
    if (1==1) {
      // import module for side effects
      await import('../data_classes/user.js');
    }
  })
//import { Costumer } from '../data_classes/user.js';

var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")
var name = document.getElementById("name")
var address = document.getElementById("address")


var ResgisteredCostumer = new Customer(username, email, password, name, address)


console.log(ResgisteredCostumer.getRealName());