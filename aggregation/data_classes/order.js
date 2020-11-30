class Order{
    #id;
    #customer;
    #items=[];

    constructor(items, customer){
        this.#items = items;
        this.#customer = customer;
        this.#id = null;
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
}