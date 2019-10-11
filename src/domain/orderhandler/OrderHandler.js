const _ = require('underscore');

const foodRepository = require('../../repositories/FoodRepository');
const carePackageRepository = require('../../repositories/CarePackageRepository');
const orderRepository = require('../../repositories/OrderRepository');

class OrderHandler {

    static fulfillOrder(userObj,orderObj){
        let keys = _.keys(orderObj.items);
        for(let item of keys){
            if(orderObj.items[item].itemType === 'food'){
                this.updateFoodInventory(orderObj.items[item]);
            } else if (orderObj.items[item].itemType === 'carepackage') {
                this.updateCarePackageInventory(orderObj.items[item]);
            }
            orderObj.completedBy = userObj.userName;
            orderObj.completedDate = new Date();
            orderObj.status = 'completed';
            console.log(orderObj);
            orderRepository.editOrder(orderObj);
            //NOTIFY USER HERE
            //TODO: NOTIFY USER SOMEHOW
        }
    }

    static updateFoodInventory(item){
        foodRepository.getFoodItem(item.itemName).then((foodObj) => {
            console.log(foodObj);
            foodObj.quantity -= item.quantity;
            foodRepository.editFood(foodObj);
        })

    }

    static updateCarePackageInventory(item){
        carePackageRepository.getCarePackage(item.itemName).then((carePackageObj) => {
            carePackageObj.quantity -= item.quantity;
            carePackageRepository.editCarePackage(carePackageObj);
        })
    }

}

module.exports = OrderHandler;
