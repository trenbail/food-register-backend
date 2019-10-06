class Session{
    sessionId;
    sessionUser;
    lastTouch;

    updateLastTouch(){
        this.lastTouch = Date().getTime();
    }

    generateId(){

    }

    constructor(user){
        this.sessionUser = user;
    }

}
