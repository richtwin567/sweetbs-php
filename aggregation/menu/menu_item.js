class MenuItem{
    constructor(price, name, description, ingredients){
        this.price = price;
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.id = this.generateId();
    }

    // Getters
    getPrice(){
        return this.price;
    }

    getName(){
        return this.name;
    }

    getDescription(){
        return this.description;
    }
    
    getIngredients(){
        return this.ingredients;
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

    generateId(){

    }
}