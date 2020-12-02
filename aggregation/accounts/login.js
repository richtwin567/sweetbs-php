import { Customer, RealName } from '../data_classes/user.js';
import { authUsers } from './auth.js';

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

//Variables from the forgot_password from
var newpasswordform = document.getElementById("newPasswordform")
var newpass = document.getElementById("newpass")
var cnewpass = document.getElementById("cnewpass")

const loginpagepath = "http://localhost:8080/presentation/website/login.php"
const registerpagepath = "http://localhost:8080/presentation/website/register.php"
const forgot_pwpagepath = "http://localhost:8080/presentation/website/forgot_password.php"

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
    let queryString = '?username='+logusername+'&password='+logpassword
    console.log(queryString);
    authUsers(queryString);
    /*if(authUsers(queryString)){ //this should return boolean
        //Redirect user to 
    }else{
        window.alert("No sure user exists. Please Sign Up or try again");
    }  */
    //console.log("true");
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
if(getURL() == forgot_pwpagepath){
    console.log("deh yah3")
    newpasswordform.addEventListener("submit", (event) =>{
        console.log("here3");
        if(newpass.value == cnewpass.value){
            //Function in auth that updates the database with new password
        }else{
            window.alert("Passwords Do Not Match!");
            event.preventDefault();
        }
        //Function in auth that updates the database with new password
    })
}
//Function runs when submit button for the register-form is clicked

//Function runs when submit button for the login-form is clicked
//var ResgisteredCostumer = new Customer(username.value, email.value, password.value, name.value, address.value)

