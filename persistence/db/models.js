// This module defines the models used to create a record in the database

class UserModels{
    createCustomerModel(customerObj){
        let customerName = customerObj.getRealName();
        let deliveryAddress = customerObj.getDeliveryAddress();
        const customerModel = {
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
        return customerModel;
    }
}


class OrderModels{
    createOrderModel(orderObj){
        let customer = orderObj.getCustomer()
        const orderModel = {
            _id: orderObj.getOrderId(),
            customer: customer.getUsername(),
            menuItemIds: orderObj.getMenuItemIds()
        }
        return orderModel;
    }
}

class MenuModels{

}

class IngredientModel{

}