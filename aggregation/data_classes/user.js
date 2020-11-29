class User{
    #username = "";
    #email = "";
    #password="";
    #type ="";

    constructor(username,email,password){
        this.#username = username;
        this.#email = email;
        this.#password = password;
    }

    getUsername(){
        return this.#username;
    }

    getEmail(){
        return this.#email;
    }

    getPassword(){
        return this.#password;
    }

    setUsername(newUsername){
        this.#username=newUsername;
    }

    setEmail(newEmail){
        this.#email=newEmail;
    }

    setPassword(newPassword){
        this.#password=newPassword;
    }

}

class Admin extends User{
    constructor(username,email,password){
        super(username,email,password);
        this.#type="Admin";
    }
}


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
        this.#addressLines = addressLines;
    }

    /**
     * Retrieves the address
     */
    getAddress(){
        
    }
}   