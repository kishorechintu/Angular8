let obj = require("../Config/token");
let auth = (req, res, next) => {

  let allheaders = req.headers;
  let a_token = allheaders.authorization;

  let newtoken = "Bearer" + obj.token;
  console.log("a_token is--" + a_token);
  console.log("new Token is--" + newtoken);
  if (a_token == newtoken) {
    next();
  } else {
    res.send({ message: "Unathorized User" });
  }
};
module.exports = auth;
