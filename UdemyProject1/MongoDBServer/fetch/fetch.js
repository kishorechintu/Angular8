let mongodb = require("mongodb");
let details = mongodb.MongoClient;
let auth = require("../Config/auth");

module.exports = require("express")
  .Router()
  .get("/", [auth], (req, res) => {
    details.connect(
      "mongodb://localhost:27017/TaskManager",

      (err, db) => {
        if (err) {
          console.log(err);
        } else {
          db.collection("Projects")
            .find()
            .toArray((err, array) => {
              if (err) {
                res.send(err);
              } else {
                res.send(array);
              }
            });
        }
      }
    );
  });
