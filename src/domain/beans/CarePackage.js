class CarePackage {

    constructor(name, description,type, items, quantity, members){
        this.name = name;
        this.description = description;
        this.type = type;
        this.items = items;
        this.quantity = quantity;

        if(members === undefined){
            members = {};
        }
        this.members = members;
    }

}


module.exports = CarePackage;
