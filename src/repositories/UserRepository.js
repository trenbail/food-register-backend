const firebase = require('./FirebaseDao');
const database = firebase.database();

const user = require('../domain/beans/User');




class UserRepository {

    createUser(user){
        database.ref('users/'+user.userName).set({
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
        database.ref('users/'+user.userName).update({
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
        database.ref("users/").orderByKey().equalTo(username).once('value').then((snapshot) => {
            console.log(snapshot.val());
        })
    }


}

const userRepository = new UserRepository();

var user1 = new user('Trenton',"Admin","password",'512-923-0246','1234 Street, Cedar Park, TX',"trenton@email.com",{Dogdays: true},{jim: "person"});
userRepository.updateUser(user1);

userRepository.getUser('Trenton');

module.exports = userRepository;
