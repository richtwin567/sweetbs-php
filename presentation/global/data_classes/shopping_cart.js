import{} from "../../../aggregation/data_classes/order.js"

class ShoppingCart {
    #order;

    constructor(order){
        this.#order =order;
    }

    checkout(){
        var jsonorder = this.#order.toMongoJSON();
        fetch("http://127.0.0.1:3000/orders",{
            method:"POST",
            body: jsonorder
        })
    }

    cancel(){

    }

}

export {ShoppingCart};