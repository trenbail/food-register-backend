const firebase = require('./FirebaseDao');
const database = firebase.database();

const user = require('../domain/beans/User');




class UserRepository {

    createUser(user){
        database.ref('users/'+ user.userName).set({
            'username': user.userName,
            'fullname': user.fullName,
            'usertype': user.userType,
            'password': user.password,
            'phone': user.phone,
            'address': user.address,
            'email': user.email,
            'subscriptions': user.subscriptions,
            'family': user.familyInformation
        });
    }

    updateUser(user){
        database.ref('users/'+ user.userName).update({
            'username': user.userName,
            'fullname': user.fullName,
            'usertype': user.userType,
            'password': user.password,
            'phone': user.phone,
            'address': user.address,
            'email': user.email,
            'subscriptions': user.subscriptions,
            'family': user.familyInformation
        });
    }

    getUser(username){
        return new Promise((resolve, reject) => {
            resolve(database.ref("users/").orderByKey().equalTo(username).once('value').then((snapshot) => {
                let userobj = snapshot.toJSON()[username];
                return new user(userobj.username,userobj.fullname,userobj.usertype,userobj.password,userobj.phone,userobj.address,userobj.email,userobj.subscriptions,userobj.family);
            }))
        })
    }

    doesUserExist(username){
       return database.ref("users/").orderByKey().equalTo(username).once('value').then((snapshot) => {
            return snapshot.exists();
        })
    }

    subscribeFood(userObj){
        database.ref('users/' + userObj.userName + "/subscriptions/food").update(userObj.subscriptions.food);
    }

    unsubscribeFood(userObj){
        database.ref('users/' + userObj.userName + "/subscriptions/food").set(userObj.subscriptions.food);
    }

    subscribeCarePackage(userObj){
        database.ref('users/' + userObj.userName + "/subscriptions/carepackages").update(userObj.subscriptions.carepackages);
    }

    unsubscribeCarePackage(userObj){
        database.ref('users/' + userObj.userName + "/subscriptions/carepackages").set(userObj.subscriptions.carepackages);
    }




}

const userRepository = new UserRepository();
module.exports = userRepository;
