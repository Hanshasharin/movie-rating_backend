var jwt = require('jsonwebtoken');
const secretKey = "secretey"

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const splitToken = token.split(" ")[1];
    if (splitToken && splitToken !== "null") {
        try{
  var decoded = jwt.verify(splitToken,secretKey);
        if(decoded.email){
            console.log(token);
      console.log(typeof token);

      return next();
      
        }}
      catch(err){
  return res.status(401).send({ message: "unauthorized" });

      }
        }
      
   
  } 

};
module.exports = authMiddleware;
