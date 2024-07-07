const jwt = require("jsonwebtoken");
const userSecret = process.env.USER_SECRET;

const userAuthentication = (req , res , next) => {
  // User authentication middleware logic
  const authHeader = req.headers.authorization ;
  if(authHeader)
  {
    const token = authHeader.split(" ")[1] ;
    jwt.verify(token , userSecret , (err , user) => {
      if(err)
      {
        return res.sendStatus(403) ;
      }
      req.user = user ;
      next() ;
    })
  }
  else{
    res.sendStatus(401) ;
  }
};

module.exports =  userAuthentication ;