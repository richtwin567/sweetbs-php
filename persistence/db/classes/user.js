// Import hashing object and instantiate hashing object
const hashing = new (require('../../security/hashing'));

class User{
    /**
     * 
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
     * 
     * @param {RealName} name 
     * @param {Address} deliveryAddress 
     * @param {Card} card 
     */
    constructor(username, email, password, name, deliveryAddress){
        super(username, email, password);
        this.name = name;
        this.deliveryAddress = deliveryAddress;
    }
}

class Admin extends User{
    
}
const user = new User('bobross','bob@gmail.com', 'Testo');

console.log(user.getPassword());