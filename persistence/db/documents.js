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
    /**
     * 
     * @param {*} customerObj 
     */
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
    /**
     * 
     * @param {Order} orderObj 
     */
    createOrderDocument(orderObj){
        let customer = orderObj.getCustomer()
        const orderDocument = {
            _id: orderObj.getOrderId(),
            customer: customer.getUsername(),
            menuItemIds: orderObj.getMenuItemIds()
        }
        return orderDocument;
    }

    /**
     * 
     * @param {OrderItem} orderItemObj 
     */
    createOrderItemDocument(orderItemObj){
        const orderItemDocument = {
            _id: orderItemObj.id,
            menuItem: orderItemObj.getMenuItem().getMenuItemId(), // Link to Menu Item in database
            quantity: orderItemObj.getQuantity()
        }
        return orderItemDocument;
    }
}


 
class MenuDocuments extends Document{

}

class IngredientDocument extends Document{
    /**
     * 
     * @param {Ingredient} ingredientObj 
     */
    createIngredientDocument(ingredientObj){
        const ingredientDocument = {
            _id: ingredientObj.id,
            name: ingredientObj.ingredientName
        };
        return ingredientDocument;
    }
}

export {UserDocuments, OrderDocuments, IngredientDocument};