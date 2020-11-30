// Retrieve the ObjectID object from MongoDB
const ObjectID = require('mongodb').ObjectID;

class Order{
    /**
     * Initializes the attributes for the Order class
     * @param {Customer} customer The customer associated with the order.
     * @param {ObjectID} id The ID of the order in Mongodb
     */
    constructor(customer, id=null){
        this.customer = customer;
        this.orderItems = []; // Initializing as an empty array so more orders can be added.
        this.id = id;
        this.setOrderId(); // Sets id if none was passed in
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
     * Retrieves the menu item ids from the order items in the Order.
     * @returns {Array} An array of the associated menu item ids
     */
    getMenuItemIds(){
        let menuItemIds = []
        for(let index in this.orderItems){
            let orderItem = this.orderItems[index]
            menuItemIds.push(orderItem.getMenuItem().getMenuItemId())
        }
        return menuItemIds;
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

    setOrderId(){
        if(this.id === null){
            this.id = new ObjectID(); 
        }else if(typeof(this.id) !== ObjectID){
            this.id = new ObjectID(this.id);
        }
    }
}

class OrderItem{
    /**
     * Initializes the attributes for the OrderItem class
     * @param {MenuItem} menuItem The corresponding menu item.
     * @param {number} quantity The quantity of the item being ordered.
     */
    constructor(menuItem, quantity){
        this.id = new ObjectID();
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

// TODO - Place this code in a unittest

/*
// Imports for testing purposes 
const Customer = require('../../aggregation/accounts/user').Customer;
const {RealName, Address} = require('../../aggregation/accounts/customer_data');
const {MenuItem} = require('../../aggregation/menu/menu_item');

// Initializing test variables
let testAddress = new Address(['20 Queensway', 'Willowdene','Spanish Town']);
let testName = new RealName('Jason', 'Gayle');
let testMenuItem1 = new MenuItem(52, 'Potatoes', 'Just potatoes', []);
console.log(testMenuItem1.getMenuItemId());
let testMenuItem2 = new MenuItem(42, 'Fries', 'Just potatoes', []);
console.log(testMenuItem2.getMenuItemId());
let testCustomer = new Customer('DangaRanga','test@person.com','welpthisworks', testName, testAddress);
let testOrderItem1 = new OrderItem(testMenuItem1, 3);
let testOrderItem2 = new OrderItem(testMenuItem2, 5); 
let testOrder = new Order(testCustomer);

testOrder.addOrderItem(testOrderItem1);
testOrder.addOrderItem(testOrderItem2);

console.log(testOrder.getMenuItemIds());
 */

module.exports = {Order, OrderItem};