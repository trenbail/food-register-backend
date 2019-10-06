const firebase = require('./FirebaseDao')
const database = firebase.database();



class UserRepository {

    createUser(){
        database.ref('users/').set({
            'use': 'test'
        });


    }

    updateUser(){

    }


}

const userRepository = new UserRepository();
userRepository.createUser();
