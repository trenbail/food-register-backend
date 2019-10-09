const firebase = require('./FirebaseDao');
const database = firebase.database();

const food = require('../domain/beans/Food');

class FoodRepository {
    addFood(foodObj){
        database.ref("inventory/food/" + foodObj.name).set({
            "name": foodObj.name,
            "description": foodObj.description,
            "type": foodObj.type,
            "imageurl": foodObj.imageurl,
            "quantity": foodObj.quantity,
            "members": foodObj.members
        })
    }

    editFood(foodObj){
        database.ref("inventory/food/" + foodObj.name).update({
            "name": foodObj.name,
            "description": foodObj.description,
            "type": foodObj.type,
            "imageurl": foodObj.imageurl,
            "quantity": foodObj.quantity,
            "members": foodObj.members
        })
    }

    addFoodMember(foodObj){
        database.ref('inventory/food/'+ foodObj.name + "/members").update(foodObj.members);
    }

    removeFoodMember(foodObj){
        database.ref('inventory/food/'+ foodObj.name + "/members").set(foodObj.members);
    }

    getFoodInventory(){
    }

    getFoodItem(itemName){
       return database.ref('inventory/food/').orderByKey().equalTo(itemName).once('value').then((snapshot) => {
            let temp = snapshot.toJSON()[itemName];
            if(temp.members === undefined){
                temp.members = {};
            }
            return new food(temp.name,temp.description,temp.type,temp.imageurl,temp.quantity,temp.members);
        });
    }


}

const foodRepository = new FoodRepository();
module.exports = foodRepository;
