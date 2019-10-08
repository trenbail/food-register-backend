const database = require('./FirebaseDao');

class FoodRepository {
    addFood(foodObj){
        database.ref("/inventory/food/" + foodObj.name).set({
            "name": foodObj.name,
            "description": foodObj.description,
            "type": foodObj.type,
            "imageurl": foodObj.imageurl,
            "quantity": foodObj.quantity
        })
    }

    editFood(foodObj){
        database.ref("/inventory/food/" + foodObj.name).update({
            "name": foodObj.name,
            "description": foodObj.description,
            "type": foodObj.type,
            "imageurl": foodObj.imageurl,
            "quantity": foodObj.quantity
        })
    }

    getFoodInventory(){

    }

    getFoodItem(){

    }


}
