
function PICEDB() { }

PICEDB.prototype = {
  open: open
};


var picedb = new PICEDB();
module.exports = picedb;

function open(strConn) {
  return new Promise(function (resolve, reject) {

    var mongodb = require('mongodb');

    var MongoClient = mongodb.MongoClient;

    MongoClient.connect(strConn, function (err, db) {
      if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
        reject(err);
      } else {
        console.log('Connection established to ', confirm);
        resolve(db);
      }
    });

  });
}