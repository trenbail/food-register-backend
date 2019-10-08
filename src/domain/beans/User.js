class User {

    constructor(username,usertype,password,phone,address,email,subcriptions,familyinfo){
        this.userName = username;
        this.userType = usertype;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.email = email;
        this.subscriptions = {};
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
