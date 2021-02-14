const express = require('express');
const bodyParser = require('body-parser');
const initDb = require("./db").initDb;
const getDb = require("./db").getDb;
//const path = require('path');
//const http = require('http');
const app = express();
const { MongoClient } = require("mongodb");
// var serverApp = http.createServer(app);

// mongoose.connect("mongodb://localhost:27017/Alumini")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    res.setHeader('Access-Control-Allow-Credentials','true');
    next();
});

//const userRoutes = require("./routes/userRoutes.js");
const schoolRoutes = require("./routes/schoolRoutes.js");

//app.use("/user",userRoutes);
app.use("/school", schoolRoutes);

//	mongodb+srv://Ad03:KGdePorXHMW9jyNP@alumninetwork-dxjvt.mongodb.net/shop?retryWrites=true&w=majority
// Connection URI
const uri =
  "mongodb://localhost:27017";
// Create a new MongoClient
const client = new MongoClient(uri);
var db
var schoolCollection
initDb(function (err) {
  app.listen(8888, function (err) {
      if (err) {
          throw err; //
      }
      console.log("API Up and running on port " + 8888);
  });
});
//console.log(db)
//module.exports = {'schoolCollection' : schoolCollection}
