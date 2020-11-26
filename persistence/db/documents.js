// This module defines the Documents used to create a record in the database

/**
 * Abstract class to define a MongoDb document
 */
class Document{
    constructor(){
        if(this.constructor == Document){
            throw new Error("Abstract classes cannot be instantiated");
        }
    }
}


class UserDocuments extends Document{
    createCustomerDocument(customerObj){
        let customerName = customerObj.getRealName();
        let deliveryAddress = customerObj.getDeliveryAddress();
        const customerDocument = {
            username: customerObj.getUsername(),
            email: customerObj.getEmail(),
            password: customerObj.getPassword(),
            name: {
                firstName: customerName.getFirstName(),
                lastName: customerName.getLastName()
            },
            address:{
                deliveryAddress: deliveryAddress.getAddress()
            }
        };
        return customerDocument;
    }
}


class OrderDocuments extends Document{
    createOrderDocument(orderObj){
        let customer = orderObj.getCustomer()
        const orderDocument = {
            _id: orderObj.getOrderId(),
            customer: customer.getUsername(),
            menuItemIds: orderObj.getMenuItemIds()
        }
        return orderDocument;
    }
}

class MenuDocuments extends Document{

}

class IngredientDocument extends Document{

}