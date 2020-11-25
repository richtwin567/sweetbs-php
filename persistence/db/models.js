function createCustomerModel(customerObj){
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