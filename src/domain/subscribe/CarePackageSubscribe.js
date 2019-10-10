const userRepository = require('../../repositories/UserRepository');
const carePackageRepository = require('../../repositories/CarePackageRepository');

class CarePackageSubscribe {

    static subscribe(userObj,carePackageObj){
        userObj.subscriptions.carepackages[carePackageObj.name] = true;
        carePackageObj.members[userObj.name] = true;

        userRepository.subscribeCarePackage(userObj);
        carePackageRepository.addMember(carePackageObj);
    }

    static unsubscribe(userObj,carePackageObj){
        delete userObj.subscriptions.carepackages[carePackageObj.name];
        delete carePackageObj.members[userObj.name];

        userRepository.unsubscribeCarePackage(userObj);
        carePackageRepository.removeMember(carePackageObj);
    }

}

module.exports = CarePackageSubscribe;
