class User {
    #id;
	#username = "";
	#email = "";
	#password = "";
	type ="";

	constructor(username, email, password) {
		this.#username = username;
		this.#email = email;
        this.#password = password;
        this.#id = null;
    }
    
    getType(){
        return this.type;
    }

    getId(){
        return this.#id;
    }

	getUsername() {
		return this.#username;
	}

	getEmail() {
		return this.#email;
	}

	getPassword() {
		return this.#password;
	}

	setUsername(newUsername) {
		this.#username = newUsername;
	}

	setEmail(newEmail) {
		this.#email = newEmail;
	}

	setPassword(newPassword) {
		this.#password = newPassword;
	}
}

class Admin extends User {
	constructor(username, email, password) {
		super(username, email, password);
		this.type = "Admin";
	}
}

class RealName {
	#firstName;
	#lastName;

	/**
	 * Instantiates the RealName class with a User's first name and last name.
	 * @param {string} firstName
	 * @param {string} lastName
	 */
	constructor(firstName, lastName) {
		this.#firstName = firstName;
		this.#lastName = lastName;
	}

	getFirstName() {
		return this.#firstName;
	}

	getLastName() {
		return this.#lastName;
	}

	getFullName() {
		return this.#firstName + " " + this.#lastName;
	}

	setFirstName(newFname) {
		this.#firstName = newFname;
	}

	setLastName(newLname) {
		this.#lastName = newLname;
	}
}

class Address {
	#addressLines;

	constructor(addressLines) {
		this.#addressLines = this.#parseAddressLines(addressLines);
	}

	/**
	 * Retrieves the address
	 */
	getAddress() {
		return this.#addressLines;
	}

	setAddress(newAddress) {
		this.#addressLines = this.#parseAddressLines(newAddress);
	}

	#parseAddressLines(lines) {
		return lines.split("\n").forEach((line) => line.trim());
	}
}

class Card{

    #nameOnCard;
    #cardNumber;
    #cvv;
    #expiryDate;

    constructor(name, cardnum, cvv, expirydate) {
        this.#cardNumber =cardnum;
        this.#cvv = cvv;
        this.#expiryDate = expirydate;
        this.#nameOnCard = name;
    }

    getNameOnCard(){
        return this.#nameOnCard;
    }

    getCardNumber(){
        return this.#cardNumber;
    }

    getCVV(){
        return this.#cvv;
    }

    getExpiryDate(){
        return this.#expiryDate;
    }

    setNameOnCard(name){
        this.#nameOnCard = name;
    }

    setCardNumber(cardnum){
        this.#cardNumber=cardnum;
    }

    setCVV(cvv){
        this.#cvv=cvv;
    }

    setExpiryDate(date){
        this.#expiryDate=date;
    }

}

export class Customer extends User{

    #card;
    #name;
    #deliveryAddress;
    
	constructor(username, email, password, card, realname, address) {
        super(username, email, password);
        this.#card=card;
        this.#deliveryAddress = address;
        this.#name = realname;
        this.#type = "Customer";
    }

    getCard(){
        return this.#card;
    }

    getDeliveryAddress(){
        return this.#deliveryAddress;
    }

    getRealName(){
        return this.#name;
    }
    
}

export {Customer,User,Address,Admin,Card,RealName};