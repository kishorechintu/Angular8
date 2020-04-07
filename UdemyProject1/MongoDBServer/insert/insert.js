module.exports = require("express")
  .Router()
  .post("/", (req, res) => {
    let obj = {
      ProjectId: req.body.ProjectId,
      ProjectName: req.body.ProjectName,
      DateOfStart: req.body.DateOfStart,
      TeamSize: req.body.TeamSize,
      Active: req.body.Active,
      Status: req.body.Status,
      ClientLocationName: req.body.ClientLocationName

    };
    let mongodb = require("mongodb");
    let details = mongodb.MongoClient;
    details.connect("mongodb://localhost:27017/TaskManager", (err, db) => {
      if (err) throw err;
      else {
        db.collection("Projects").insertOne(obj, (err, result) => {
          if (err) {
            res.send({ insert: "fail" });
          } else {
            res.send(obj);
          }
        });
      }
    });
  });
