const ObjectID = require('mongodb').ObjectID;

class MenuItem{
    /**
     * Initializes the attributes for the MenuItem class
     * @param {number} price The price of the mneu item
     * @param {string} name The name of the menu item
     * @param {string} description The description of the menu item
     * @param {Array} ingredients A collection of Ingredient objects
     */
    constructor(price, name, description, ingredients){
        this.price = price;
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.id = new ObjectID(); 
    }

    // Getters
    /**
     * @returns {number}
     */
    getPrice(){
        return this.price;
    }

    /**
     * @returns {string}
     */
    getName(){
        return this.name;
    }

    /**
     * @returns {string}
     */
    getDescription(){
        return this.description;
    }
    
    /**
     * @returns {Array}
     */
    getIngredients(){
        return this.ingredients;
    }

    getMenuItemId(){
        return this.id;
    }

    getPicture(){

    }

    // Setters
    setName(newName){
        this.name = newName;
    }

    setPrice(newPrice){
        this.price = newPrice;
    }

    setDescription(newDescription){
        this.description = newDescription;
    }

    setPicture(newPicture){
        
    }
}

// Export classes from module
module.exports = {MenuItem};