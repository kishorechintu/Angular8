module.exports = require("express")
  .Router()
  .put("/", (req, res) => {
    let con_obj = { ProjectId: req.body.ProjectId };
    let update_obj = {
      $set: {
        ProjectName: req.body.ProjectName,
        DateOfStart: req.body.DateOfStart,
        TeamSize: req.body.TeamSize
      }
    };
    let mongodb = require("mongodb");
    let details = mongodb.MongoClient;
    details.connect("mongodb://localhost:27017/TaskManager", (err, db) => {
      db.collection("Projects").updateOne(
        con_obj,
        update_obj,
        (err, result) => {
          if (err) {
            res.send({ update: "fail" });
          } else {
            res.send(update_obj);
          }
        }
      );
    });
  });
