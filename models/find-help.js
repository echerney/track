const { MongoClient } = require('mongodb');
const dbConnection = 'mongodb://localhost:27017/tracker';
const request = require('request');



function getFacilityData(req,res,next) {
  request('https://data.cityofnewyork.us/resource/8nqg-ia7v.json?facility_type=MH&&zip='+req.query.zip, function (err, response, data) {
    if (err) throw err;
    res.facilityList = data;
    next();
  })
}


module.exports = { getFacilityData }
