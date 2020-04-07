let express = require("express");
let cors = require("cors");
let mongodb = require("mongodb");
let bodyparser = require("body-parser");

let app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
let Connection = mongodb.MongoClient;

app.use("/fetch", require("./fetch/fetch"));
// app.use("/fetchbyid", require("./fetch/fetchbyid"));

//use insert Module
app.use("/update", require("./update/update"));

//use delete Module
app.use("/delete", require("./delete/delete"));

//use insert Module
app.use("/insert", require("./insert/insert"));

app.use("/login", require("./Login/login"));

app.listen(8080);
console.log("Server listening to port 8080");
