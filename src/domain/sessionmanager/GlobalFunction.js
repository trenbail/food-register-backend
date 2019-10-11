const sessionManager = require('./SessionManager');

const  verifySession = (req,res,next)=>{
    let sessionId = req.cookies.sessionId;
    if(req.path === "/login" || req.path === "/createprofile"){
        console.log(req.path);
        next();
    } else if (sessionId !== undefined){
        if(sessionManager.idSessionExists(sessionId)){
            sessionManager.getSessions().forEach((elem) => {
               if(elem.sessionId === sessionId){
                   elem.updateLastTouch();
               }
            });
           next();
        } else {
            res.clearCookie("sessionId");
            res.status(403).json({error: "You are not authorized"});
        }
    } else {
        res.status(403).json({error: "You are not authorized"});
    }
};

module.exports = {'verifySession': verifySession};
