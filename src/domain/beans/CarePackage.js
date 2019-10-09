class CarePackage {

    constructor(carepackagename, carepackagedescription,carepackagetype, carepackageitems, carepackagequantity){
        this.name = carepackagename;
        this.description = carepackagedescription;
        this.type = carepackagetype;
        this.items = carepackageitems;
        this.quantity = carepackagequantity;
        this.members = [];
    }

}


module.exports = CarePackage;
