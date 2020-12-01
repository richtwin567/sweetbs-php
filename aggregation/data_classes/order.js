import mongodb from "mongodb";
const ObjectID = mongodb.ObjectID;

class Order{
    #id;
    #customer;
    #items=[];

    constructor(items, customer, id=null){
        this.#items = items;
        this.#customer = customer;
        this.#id = id;
        this.setOrderId();
    }

    getOrderItems(){
        return this.#items;
    }

    getCustomer(){
        return this.#customer;
    }

    getOrderId(){
        return this.#id;
    }

    addOrderItem(orderitem){
        this.#items.push(orderitem);
    }

    setOrderId(){
        if(this.#id === null){
            this.#id = new ObjectID(); 
        }else if(typeof(this.id) !== ObjectID){
            this.#id = new ObjectID(this.id);
        }
    }
}