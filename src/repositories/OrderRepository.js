const firebase = require('./FirebaseDao');
const database = firebase.database();

const _ = require('underscore');

class OrderRepository {

    createOrder(orderObj){
        database.ref("/orders/" + orderObj.orderNo).set({
            "orderno": orderObj.orderNo,
            "user": orderObj.user,
            "items": orderObj.items,
            "status": orderObj.status,
            "completedBy": orderObj.completedBy,
            "completeddate": orderObj.completedDate
        })
    }

    getOpenOrders(){
        return database.ref("/orders").once('value').then((snapshot) => {
            let orders = snapshot.toJSON();
            let keys = _.keys(orders);
            for(let order of keys){
                if(orders[order].status !== 'open'){
                    delete orders[order];
                }
            }
            return orders;
        })
    }

    getHighestOrderNo(){
       return database.ref('/orders').orderByKey().limitToLast(1).once('value').then((snapshot) =>{
            let highest = _.keys(snapshot.toJSON())[0];
            return Number(highest);
        });
    }

}

const orderRepository = new OrderRepository();
module.exports = orderRepository;
