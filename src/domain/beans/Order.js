class Order {
    constructor(orderNo,user,items,status,completedBy,completedDate){
        this.orderNo = orderNo;
        this.user = user;
        this.items = items;
        this.status = status.toLowerCase();
        this.completedBy = completedBy;
        this.completedDate = completedDate;
    }
}


module.exports = Order;
