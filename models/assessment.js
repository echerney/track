const { MongoClient } = require('mongodb');
const dbConnection = 'mongodb://localhost:27017/tracker';


function setScore(req, res, next) {
  let aScore = $('input').val();
  MongoClient.connect(dbConnection, function(err, db) {
    db.collection('users').update({email:user.email}, {$set: {score: aScore}}, function (err, data) {
      if (err) throw err;
      console.log(data)
    })
  })
}

module.exports = {setScore}
