const session = require('src/domain/beans/Session');

class SessionManager {
    sessions = [];

    constructor(){
    }

    newSession(){
        sessions.push();
    }

    //End a Session if it has been 30 min
    checkSessions(){

    }

}

const sessionManager = new SessionManager();
module.exports = sessionManager;



