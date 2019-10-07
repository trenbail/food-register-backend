const user = require('../beans/User');

class Session{
    updateLastTouch(){
        this.lastTouch = new Date().getTime();
    }

    constructor(user){
        this.sessionUser = user.userName;
        this.sessionId = user.userName;
        this.updateLastTouch();
    }

}

module.exports = Session;
