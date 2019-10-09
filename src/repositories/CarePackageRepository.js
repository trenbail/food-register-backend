const database = require('./FirebaseDao');


class CarePackageRepository {
    addCarePackage(carepackageObj){
        database.ref('inventory/carepackages/' + carepackageObj.packageName).set({
            "name": carepackageObj.packageName,
            "description": carepackageObj.packageDescription,
            "type": carepackageObj.packageType,
            "items": carepackageObj.packageItems,
            "quantity": carepackageObj.packageQuantity,
            "members": carepackageObj.packageMembers
        });
    }
    editCarePackage(carepackageObj){
        database.ref('inventory/carepackages/' + carepackageObj.packageName).update({
            "name": carepackageObj.packageName,
            "description": carepackageObj.packageDescription,
            "type": carepackageObj.packageType,
            "items": carepackageObj.packageItems,
            "quantity": carepackageObj.packageQuantity,
            "members": carepackageObj.packageMembers
        });
    }

    getCarePackageInventory(){
        database.ref("inventory/carepackages/").once('value').then((snapshot) => {
            let data = snapshot.json();
    });
    }

    getCarePackage(carePackageName){
        database.ref("inventory/carepackages/" + carePackageName).once('value').then((snapshot) => {
            let carePackageName = snapshot.json();
            console.log(carePackageName);
        })
    }

}
const carePackageRepository = new CarePackageRepository();
module.exports = carePackageRepository
