class CarePackage {

    constructor(carepackagename, carepackagedescription,carepackagetype, carepackageitems, carepackagequantity){
        this.packageName = carepackagename;
        this.packageDescription = carepackagedescription;
        this.packageType = carepackagetype;
        this.packageItems = carepackageitems;
        this.packageQuantity = carepackagequantity;
        this.packageMembers = [];
    }

}
