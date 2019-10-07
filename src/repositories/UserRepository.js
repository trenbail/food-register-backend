const firebase = require('./FirebaseDao');
const database = firebase.database();

const user = require('../domain/beans/User');




class UserRepository {

    createUser(user){
        database.ref('users/'+ user.userName).set({
            'username': user.userName,
            'userType': user.userType,
            'password': user.password,
            phone: user.phone,
            address: user.address,
            email: user.email,
            'subscriptions': user.subscriptions,
            'family': user.familyInformation
        });


    }

    updateUser(user){
        database.ref('users/'+ user.userName).update({
            'username': user.userName,
            'userType': user.userType,
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
                return new user(userobj.username,userobj.userType,userobj.password,userobj.phone,userobj.address,userobj.email,userobj.subscriptions,userobj.family);
            }))
        })

    }


}

const userRepository = new UserRepository();
let user1 = new user('Trenton','Admin',"password","512-923-0246","1234 Street","Trenton@email.com",{person: true},{person: true});
userRepository.updateUser(user1);
module.exports = userRepository;
