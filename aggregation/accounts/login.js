import { Customer, RealName, Card, Address } from "../data_classes/user.js";
//import { authUsers, insertUserintoDB } from "./auth.js";

/* //Variables from the register form

//Variables from the log-in form
var logusername = document.getElementById("logusername");
var logpassword = document.getElementById("logpassword");
var loginform = document.getElementById("Loginform");

//Variables from the forgot_password from
var newpasswordform = document.getElementById("newPasswordform");
var newpass = document.getElementById("newpass");
var cnewpass = document.getElementById("cnewpass");

const loginpagepath = "http://localhost:8080/presentation/website/login.php";
const registerpagepath =
	"http://localhost:8080/presentation/website/register.php";
const forgot_pwpagepath =
	"http://localhost:8080/presentation/website/forgot_password.php";

function getURL() {
	let myURL =
		window.location.protocol +
		"//" +
		window.location.host +
		"" +
		window.location.pathname;
	return myURL;
} */

var signup_form = document.getElementById("Registerform");
signup_form.addEventListener("submit", (e) => createRegisteredCustomer(e));

/**
 *
 * @param
 */
function createRegisteredCustomer(e) {
	e.preventDefault();
	var username = document.getElementById("username");
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");
	var card_number = document.getElementById("card-num");
	var expiry_date = document.getElementById("expiry-date");
	var card_name = document.getElementById("name-on-card");
	var cvv = document.getElementById("cvv");
	var address = document.getElementById("address");
	//var registerform = document.getElementById("Registerform");
	let myRealname = new RealName(fname.value, lname.value);
	let delivery_address = new Address(address.value);
	let card = new Card(
		card_name.value,
		card_number.value,
		cvv.value,
		expiry_date.value
	);
	var RegisteredCustomer = new Customer(
		username.value,
		email.value,
		password.value,
		card,
		myRealname,
		delivery_address
	);
	//New customer obj created; to be verified (if does not exist) then stored to the database
	console.log(RegisteredCustomer);
	fetch("https://sweetbs-backend.herokuapp.com/users", {
		method: "POST",
		body: RegisteredCustomer.toMongoJSON(),
	})
		.catch((err) => console.log(err))
		.then((res) => {
			console.log(res);
			if (res.ok) {
				fetch("../aggregation/accounts/session_handler.php", {
					method: "POST",
					body: RegisteredCustomer.toMongoJSON(),
				});
			} else {
				console.log(res);
			}
		})
		.then((_) => window.location.href="index.php")
		.catch((err) => console.log(err));
}
/* 
/**
 *
 * @param
 
function signinRegisteredCustomer(logusername, logpassword) {
	//Uses username and password to search through the database, authenticate (compare password and username)
	//then starts a user session
	let queryString = "?username=" + logusername + "&password=" + logpassword;
	console.log(queryString);
	authUsers(queryString);
	/*if(authUsers(queryString)){ //this should return boolean
        //Redirect user to 
    }else{
        window.alert("No sure user exists. Please Sign Up or try again");
    }  
	//console.log("true");
}
console.log(getURL());
console.log(registerpagepath);
if (getURL() == registerpagepath) {
	console.log("deh yah");
	registerform.addEventListener("submit", (event) => {
		console.log("here");
		createRegisteredCustomer(
			username,
			email,
			password,
			card,
			fname,
			lname,
			address
		);
		window.location.replace(loginpagepath);
		event.preventDefault();
	});
}
if (getURL() == loginpagepath) {
	console.log("deh yah2");
	loginform.addEventListener("submit", (event) => {
		console.log("here2");
		signinRegisteredCustomer(logusername.value, logpassword.value);
		event.preventDefault();
	});
}
if (getURL() == forgot_pwpagepath) {
	console.log("deh yah3");
	newpasswordform.addEventListener("submit", (event) => {
		console.log("here3");
		if (newpass.value == cnewpass.value) {
			//Function in auth that updates the database with new password
		} else {
			window.alert("Passwords Do Not Match!");
			event.preventDefault();
		}
		//Function in auth that updates the database with new password
	});
} */
//Function runs when submit button for the register-form is clicked

//Function runs when submit button for the login-form is clicked
//var ResgisteredCostumer = new Customer(username.value, email.value, password.value, name.value, address.value)
