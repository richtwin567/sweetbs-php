/** 
 *  This module defines the classes relating to the User class
 * @module user 
*/

// Imports
const hashing = new (require('../../persistence/security/hashing'));

class User{
    /**
     * Constructor for initializing the User class
     * @param {*} username 
     * @param {*} email 
     * @param {*} password 
     */
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.salt = hashing.generateSalt(20);
        this.password = hashing.hashPassword(password, this.salt);
    }

    getUsername(){
        return this.username;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

    /**
     * Sets the new username for the user
     * @param {string} newUsername The new username
     */
    setUsername(newUsername){
        this.username = newUsername;
    }

    /**
     * Sets the new email address for the user
     * @param {string} newEmail The new email address
     */
    setEmail(newEmail){
        this.email = newEmail;
    }

    /**
     * Sets the new password hash for the user's password and generates a new salt.
     * @param {string} newPassword 
     */
    setPassword(newPassword){
        // Generate a new salt
        this.salt = hashing.generateSalt(20);
        this.password = hashing.hashPassword(newPassword, this.salt);
    }
}


class Customer extends User{
    /**
     * Constructor for initializing the Customer class
     * @param {RealName} name The name of the customer
     * @param {Address} deliveryAddress The delivery address of the customer
     */
    constructor(username, email, password, name, deliveryAddress){
        super(username, email, password);
        this.name = name;
        this.deliveryAddress = deliveryAddress;
        this.card = null;
    }
}

class Admin extends User{
    constructor(username, email, password){
        super(username, email, password);
    }
}





const testUser = new User('bobross','bob@gmail.com', 'Testo');

console.log(testUser.getPassword());