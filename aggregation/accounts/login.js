import { Customer, RealName } from '../data_classes/user.js';

//Variables from the register form
var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")
var fname = document.getElementById("fname")
var lname = document.getElementById("lname")
var card = document.getElementById("card")
var address = document.getElementById("address")
var registerform = document.getElementById("Registerform")

//Variables from the log-in form
var logusername = document.getElementById("logusername")
var logpassword = document.getElementById("logpassword")
var loginform = document.getElementById("Loginform")

var loginpagepath = "http://localhost:8080/presentation/website/login.php"
var registerpagepath = "http://localhost:8080/presentation/website/register.php"

function getURL(){
    let myURL = window.location.protocol + "//" + window.location.host + "" + window.location.pathname
    return myURL;
}

/**
 * 
 * @param
 */
function createRegisteredCustomer(username, email, password, card, fname, lname, address){
    let myRealname = new RealName(fname.value, lname.value)
    var ResgisteredCustomer = new Customer(username.value, email.value, password.value, card.value, myRealname, address.value)
    //New customer obj created; to be verified (if does not exist) then stored to the database
    console.log(ResgisteredCustomer.getCard());
    
}

/**
 * 
 * @param
 */
function signinRegisteredCustomer(logusername, logpassword){
    //Uses username and password to search through the database, authenticate (compare password and username)
    //then starts a user session
    console.log("true");
}
console.log(getURL())
console.log(registerpagepath)
if(getURL() == registerpagepath){
    console.log("deh yah");
    registerform.addEventListener("submit", (event) =>{
        console.log("here");
        createRegisteredCustomer(username, email, password, card, fname, lname, address);
        window.location.replace(loginpagepath)
        event.preventDefault();
    })
} 
if(getURL() == loginpagepath) {
    console.log("deh yah2");
    loginform.addEventListener("submit", (event) =>{
        console.log("here2");
        signinRegisteredCustomer(logusername.value, logpassword.value);
        event.preventDefault();
    })
}
//Function runs when submit button for the register-form is clicked

//Function runs when submit button for the login-form is clicked
//var ResgisteredCostumer = new Customer(username.value, email.value, password.value, name.value, address.value)




