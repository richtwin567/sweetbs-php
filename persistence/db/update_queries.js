class Update{

}

class CustomerUpdate extends Update{
    /**
     * 
     * @param {Customer} customerObj 
     * @param {string} newPassword The plaintext password as a string
     */
    updatePassword(customerObj, newPassword){
        // Update password in customer obj
        customerObj.setPassword(newPassword);
        let newPass = customerObj.getPassword();

        // Search for customer based on username
        const filter = { username: customerObj.getUsername() };

        const updatedPassword = {
            $set:{
                password: newPass
            }
        };

        return {filter: filter, updatedPassword: updatedPassword};
    }

    /**
     * 
     * @param {*} customerObj 
     * @param {RealName} newName 
     */
    updateCustomerName(customerObj, newName){
        customerObj.setRealName(newName);
        const filter = { username: customerObj.getUsername() };

        const updatedName = {
            $set:{
                name: {
                    firstName: newName.getFirstName(),
                    lastName: newName.getLastName()
                }
            }
        };
        return {filter: filter, updatedName: updatedName};
    }

}