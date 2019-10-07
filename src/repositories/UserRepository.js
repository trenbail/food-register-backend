const firebase = require('./FirebaseDao');
const database = firebase.database();

const user = require('../domain/beans/User');




class UserRepository {

    createUser(user){
        database.ref('users/'+ user.userName).set({
            'username': user.userName,
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
                //let tempuser = new user(snapshot.key)
                let userobj = snapshot.toJSON()[username];
                return new user(userobj.username,userobj.usertype,userobj.password,userobj.phone,userobj.address,userobj.email,userobj.subscriptions,userobj.family);
            }))
        })

    }


}

const userRepository = new UserRepository();
module.exports = userRepository;
