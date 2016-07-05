const { MongoClient } = require('mongodb');
const dbConnection = process.env['MONGODB_URI'] || 'mongodb://localhost:27017/tracker';
const request = require('request');


function getFacilityData(req,res,next) {
  request({
    url: 'https://data.cityofnewyork.us/resource/8nqg-ia7v.json?',
    method: 'get',
    qs: {
      facility_type: 'MH',
      zip: req.query.zip,
    },
    json:true
  },
  function (err, result, data) {
    if (err) throw err;
    res.facilityList = data;
    next();
  })
}


module.exports = { getFacilityData }
