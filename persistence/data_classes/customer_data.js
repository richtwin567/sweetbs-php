class RealName{
    /**
     * Instantiates the RealName class with a User's first name and last name.
     * @param {string} firstName 
     * @param {string} lastName 
     */
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFirstName(){
        return this.firstName;
    }

    getLastName(){
        return this.lastName;
    }
}

class Address{
    constructor(addressLines){
        // Welp, this might cause some issues.
        this.addressLines = addressLines;
    }

    /**
     * Retrieves the address
     */
    getAddress(){
        
    }
}   


module.exports = {RealName, Address};