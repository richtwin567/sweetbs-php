class Order{
    /**
     * Initializes the attributes for the Order class
     * @param {Customer} customer The customer associated with the order.
     */
    constructor(customer){
        this.id = null; // TODO - Implement function to generate the id based on the database records.
        this.customer = customer;
        this.orderItems = []; // Initializing as an empty array so more orders can be added.
    }

    /**
     * @returns {Customer} The customer associated with the order
     */
    getCustomer(){
        return this.customer;
    }

    /**
     * @returns {Array} An array of order items
     */
    getOrderItems(){
        return this.orderItems;
    }

    /**
     * @returns {string} The order id
     */
    getOrderId(){
        return this.id;
    }

    /**
     * Adds an order item to the list of order items
     * @param {OrderItem} orderItem The order item to be added.
     */
    addOrderItem(orderItem){
        this.orderItems.push(orderItem);
    }
}

class OrderItem{
    /**
     * Initializes the attributes for the OrderItem class
     * @param {MenuItem} menuItem The corresponding menu item.
     * @param {number} quantity The quantity of the item being ordered.
     */
    constructor(menuItem, quantity){
        this.menuItem = menuItem;
        this.quantity = quantity;
    }

    /**
     * @returns {number} The quantity of order items
     */
    getQuantity(){
        return this.quantity;
    }

    /**
     * @returns {MenuItem} The menu item associated with the order
     */
    getMenuItem(){
        return this.menuItem;
    }
    
    /**
     * Updates the quantity of items being ordered.
     * @param {number} newQuantity  The new quantity of the items being ordered.
     */
    setQuantity(newQuantity){
        this.quantity = newQuantity;
    }
}