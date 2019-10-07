const session = require('../beans/Session');

class SessionManager {
    constructor(){
        this.sessions = [];
    }

    newSession(user){
        let temp = new session(user);
        if(!this.sessionExists(temp)){
            this.sessions.push(temp);
        }
        return temp;
    }

    sessionExists(session){
        for(let sess of this.sessions){
            if(session.sessionUser.userName === sess.sessionUser.userName){
                return true;
            }
        }
        return false;
    }

    //End a Session if it has been 30 min
    checkSessions(){

    }

}

const sessionManager = new SessionManager();
module.exports = sessionManager;



