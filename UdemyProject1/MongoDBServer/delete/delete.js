module.exports = require("express")
  .Router()
  .post("/", (req, res) => {
    let obj = { ProjectId: req.body.ProjectId };
    console.log(obj);
    console.log(req.body.ProjectId);
    let mongodb = require("mongodb");
    let details = mongodb.MongoClient;
    details.connect("mongodb://localhost:27017/TaskManager", (err, db) => {
      db.collection("Projects").deleteOne(obj, (err, result) => {
        if (err) {
          res.send({ delete: "fail" });
        } else {
          res.send({ delete: "success" });
        }
      });
    });
  });
