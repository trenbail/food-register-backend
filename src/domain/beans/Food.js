class Food{
    constructor(itemname, itemdesc, itemtype, imageurl,quantity,members){
        this.name = itemname;
        this.description = itemdesc;
        this.type = itemtype;
        this.imageurl = imageurl;
        this.quantity = quantity;
        this.members = members;
    }
}

module.exports = Food;
