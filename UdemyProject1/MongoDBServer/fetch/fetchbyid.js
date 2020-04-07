module.exports = require("express")
  .Router()
  .get("/", (req, res) => {
    let obj = { ProjectId: "222" };
    console.log("In server", obj);
    console.log("Req object is", JSON.stringify(req));
    let mongodb = require("mongodb");
    let details = mongodb.MongoClient;
    details.connect("mongodb://localhost:27017/TaskManager", (err, db) => {
      db.collection("Projects")
        .find(obj)
        .toArray(function(err, result) {
          if (err) throw err;
          res.send(result);
        });
    });
  });
