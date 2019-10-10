const userRepository = require('../../repositories/UserRepository');
const foodRepository = require('../../repositories/FoodRepository');


class FoodSubscribe {
    static subscribe(userObj, foodObj){
        userObj.subscriptions.food[foodObj.name] = true;
        foodObj.members[userObj.userName] = true;

        userRepository.subscribeFood(userObj);
        foodRepository.addFoodMember(foodObj);
    }

    static unsubscribe(userObj, foodObj){
       delete userObj.subscriptions.food[foodObj.name];
       delete foodObj.members[userObj.userName];

       userRepository.unsubscribeFood(userObj);
       foodRepository.removeFoodMember(foodObj);
    }
}

module.exports = FoodSubscribe;
