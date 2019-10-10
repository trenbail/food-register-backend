const _ = require('underscore');

const foodRepository = require('../../repositories/FoodRepository');
const carePackageRepository = require('../../repositories/CarePackageRepository');

class OrderHandler {

    static fulfillOrder(OrderObj){
        let keys = _.keys(OrderObj.items);
        for(let item of keys){
            if(OrderObj.items[item].itemType === 'food'){
                this.updateFoodInventory(OrderObj.items[item]);
            } else if (OrderObj.items[item].itemType === 'carepackage') {
                this.updateCarePackageInventory(OrderObj.items[item]);
            }
            //NOTIFY USER HERE
            //TODO: NOTIFY USER SOMEHOW
        }
    }

    static updateFoodInventory(item){
        foodRepository.getFoodItem(item.itemName).then((foodObj) => {
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
