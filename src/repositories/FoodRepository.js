const firebase = require('./FirebaseDao');
const database = firebase.database();

const food = require('../domain/beans/Food');

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
const foodRepository = new FoodRepository();
let food1 = new food("Peanuts","A vary yummy nut", "nut","",5);
foodRepository.addFood(food1);

module.exports = foodRepository;
