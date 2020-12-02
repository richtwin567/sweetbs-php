import { Customer, RealName, Card, Address } from '../data_classes/user.js';
// import { authUsers } from './auth.js';

/**
 *
 * @param
 */
function createRegisteredCustomer(e) {
    console.log('Im here');
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
                fetch("../../aggregation/accounts/session_handler.php", {
                        method: "POST",
                        body: RegisteredCustomer.toMongoJSON(),
                    })
                    .then((res) => res.text())
                    .then((data) => console.log(data))
                    .then((_) => (window.location.href = "index.php"));
            } else {
                console.log(res);
            }
        })
        .catch((err) => console.log(err));
}