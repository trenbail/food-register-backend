class User {

    constructor(username,usertype,password,phone,address,email,subcriptions,familyinfo){
        this.userName = username;
        this.userType = usertype;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.email = email;
        this.subscriptions = subcriptions;
        this.familyInformation = familyinfo;
    }

}

module.exports = User;
