// Retrieve the ObjectID object from MongoDB
const ObjectID = require('mongodb').ObjectID;

class Ingredient{
    constructor(ingredientName){
        this.id = new ObjectID();
        this.ingredientName = ingredientName;
    }
}