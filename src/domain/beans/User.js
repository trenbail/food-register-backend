class User {

    constructor(username,fullname,usertype,password,phone,address,email,subscriptions,familyinfo){
        this.userName = username;
        this.userType = usertype;
        this.fullName = fullname;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.email = email;

        if(subscriptions === undefined){
            subscriptions = {};
        }
        if(subscriptions.food === undefined){
            subscriptions.food = {};
        }
        if(subscriptions.carepackages === undefined){
            subscriptions.carepackages = {};
        }
        this.subscriptions = subscriptions;

        if(familyinfo === undefined){
            familyinfo = {};
        }
        this.familyInformation = familyinfo;
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
