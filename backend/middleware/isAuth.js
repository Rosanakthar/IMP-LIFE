const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    const token = req.get('Authorization').split(' ')[1];
    let decodeToken;
    try{
        decodeToken = jwt.verify(token,'Rosan');
    }
    catch(err){
        console.log(err);
    }
    if(!decodeToken){
        console.log("Token Missing");
    }
    req.userId = decodeToken.userId;
    next();
}