let mongodb = require("mongodb");
let mongoClient = mongodb.MongoClient;
let generateToken = require("../Config/generateToken");
let obj = require("../Config/token");
let login = require("express")
  .Router()
  .post("/", (req, res) => {
    mongoClient.connect("mongodb://localhost:27017/TaskManager", (err, db) => {
      if (err) throw err;
      else {
        db.collection("Users")
          .find({
            Uname: req.body.Uname,
            Upwd: req.body.Upwd
          })
          .toArray((err, array) => {
            if (err) throw err;
            else {
              if (array.length > 0) {
                let user = {
                  Uname: req.body.Uname
                };
                let token = generateToken(
                  {
                    Uname: req.body.Uname,
                    Upwd: req.body.Upwd
                  },
                  "hr@tcs.in"
                );
                obj.token = token;
                res.send({
                  login: "success",
                  user: user,
                  token: token
                });
              } else {
                res.send({ login: "failed" });
              }
            }
          });
      }
    });
  });
module.exports = login;
