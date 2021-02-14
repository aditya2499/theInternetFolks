const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

let _db;

const uri =
  "mongodb://localhost:27017";
// Create a new MongoClient
const client = new MongoClient(uri);

function initDb(callback) {
   if (_db) {
       console.warn("Trying to init DB again!");
       return callback(null, _db);
   }

client.connect(connected);
function connected(err, db) {
       if (err) {
           console.log(err);
       }
       console.log("connect to db");
       _db = db.db('assign');
       schoolCollection = _db.collection('school').createIndex({ public_id: 1 }, { unique: true }, function(err, result) {
         if(err) {
            console.log(err);
      
         } else {
           console.log(result);
        } 
      });

       return callback(null, _db);
   }
}

function getDb() {
   assert.ok(_db, "Db has not been initialized. Please called init first.");
   return _db;
}


module.exports = {
    getDb,
    initDb
};