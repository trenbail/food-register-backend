class User {

    constructor(username,usertype,password,phone,address,email,subscriptions,family){
        this.username = username;
        this.usertype = usertype;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.email = email;

        if(subscriptions === undefined){
            subscriptions = {};
        }
        this.subscriptions = subscriptions;

        if(family === undefined){
            family = {};
        }
        this.familyInformation = family;
    }

    authenticate(password){
        let returnFlag = false;
        if(this.password === password){
            returnFlag = true;
        }
        return returnFlag
    }


}

module.exports = User;
