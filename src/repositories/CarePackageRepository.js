const database = require('./FirebaseDao');

class CarePackageRepository {
    addCarePackage(carepackageObj){
        database.ref('/inventory/carepackages/' + carepackage.carePackageName).set({
            "packagename": carepackage.packageName,
            "packagedescription": carepackage.packageDescription,
            "packagetype": carepackage.packageType,
            "packageitems": carepackage.packageItems,
            "packagequantity": carepackage.packageQuantity,
            "packagemember": carepackage.packageMembers
        });
    }
    editCarePackage(carepackageObj){
        database.ref('/inventory/carepackages/' + carepackage.carePackageName).update({
            "packagename": carepackage.packageName,
            "packagedescription": carepackage.packageDescription,
            "packagetype": carepackage.packageType,
            "packageitems": carepackage.packageItems,
            "packagequantity": carepackage.packageQuantity,
            "packagemember": carepackage.packageMembers
        });
    }

    getCarePackageInventory(){

    }

    getCarePackage(){

    }

}
