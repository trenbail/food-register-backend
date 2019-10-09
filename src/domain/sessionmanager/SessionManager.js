const session = require('../beans/Session');

class SessionManager {
    constructor(){
        this.sessions = [];
    }

    getSessions(){
        return this.sessions;
    }

    getSession(sessionID){
        let returnFlag = null;
        for(let elem of this.sessions){
            if(elem.sessionId === sessionID){
                returnFlag = elem.sessionUser;
            }
        }
        return returnFlag;
    }

    newSession(user){
        let temp = new session(user);
        if(!this.userSessionExists(temp)){
            this.sessions.push(temp);
        }
        return temp;
    }

    userSessionExists(session){
        for(let sess of this.sessions){
            if(session.sessionUser.userName === sess.sessionUser.userName){
                return true;
            }
        }
        return false;
    }


    idSessionExists(sessionid){
        let returnFlag = false;
        this.sessions.forEach((elem) => {
            if(elem.sessionId === sessionid){
                returnFlag = true;
            }
        });
        return returnFlag;
    }


    //End a Session if it has been 30 min
    checkSessions(){
    }

}

const sessionManager = new SessionManager();
module.exports = sessionManager;



