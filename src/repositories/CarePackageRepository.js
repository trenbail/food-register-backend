const firebase = require('./FirebaseDao');
const database = firebase.database();

const CarePackage = require('../domain/beans/CarePackage');

class CarePackageRepository {
    addCarePackage(carepackageObj){
        database.ref('inventory/carepackages/' + carepackageObj.name).set({
            "name": carepackageObj.name,
            "description": carepackageObj.description,
            "type": carepackageObj.type,
            "items": carepackageObj.items,
            "quantity": carepackageObj.quantity,
            "members": carepackageObj.members
        });
    }
    editCarePackage(carepackageObj){
        database.ref('inventory/carepackages/' + carepackageObj.packageName).update({
            "name": carepackageObj.name,
            "description": carepackageObj.description,
            "type": carepackageObj.type,
            "items": carepackageObj.items,
            "quantity": carepackageObj.quantity,
            "members": carepackageObj.members
        });
    }

    getCarePackageInventory(){
        return database.ref("inventory/carepackages/").once('value').then((snapshot) => {
            let data = snapshot.toJSON();
            return data;
    });
    }

    getCarePackage(carePackageName){
        return database.ref("inventory/carepackages/" + carePackageName).once('value').then((snapshot) => {
            let carePackage = snapshot.toJSON()[carePackageName];
            return new CarePackage(carePackage.name,carePackage.description,carePackage.type,carePackage.items,carePackage.quantity,carePackage.members);
        })
    }

    removeMember(carePackageObj){
        database.ref('inventory/carepackages/'+ carePackageObj.name + "/members").set(carePackageObj.members);
    }

}
const carePackageRepository = new CarePackageRepository();
module.exports = carePackageRepository;
